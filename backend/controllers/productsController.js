const {productsModel} = require('../models')
const path = require("path");
const debug = require('debug')('picommerce:productsController')
module.exports = class productsController {
  static async get_all_products(req, res) {
    try {
      let products = await productsModel.find({})
      res.status(200).json(products)
    } catch (e) {
      debug('Error line 10', e.message)
      res.status(500).json('Se presento un error interno en el servidor')
    }
  }

  static async get_product_by_Id(req, res) {

  }

  static create_product(req, res) {
    try {
      if (!req.files || !('logo' in req.files)) return res.status(404).json('Debe adjuntar una imagen para el producto');
      if (req.files.logo.mimetype.indexOf('image') < 0) return res.status(400).json('El tipo de archivo seleccionado no es válido');
      let target_path = path.join(__dirname.replace(/controllers/gm, ''), `public/images/products/${req.body.sku}.${req.files.logo.mimetype.replace('image/', '')}`)
      req.files.logo.mv(target_path, async function (err) {
        if (err) return res.status(400).json('No se pudo guardar el producto');
        try {
          const newProduct = {
            sku: req.body.sku,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            gallery: `/images/products/${req.body.sku}.${req.files.logo.mimetype.replace('image/', '')}`
          }
          let product = await productsModel.create(newProduct)
          product = product.toJSON()
          let commission = {
            owner_id: 3,
            product_id: product.code,
            product_description: product.description
          }//Esto esta pendiente
          res.status(200).json(`Producto creado con exito`);
        } catch (e) {
          debug('Error line 38', e.message)
          if (e.code === 11000) {
            return res.status(404).json('El ' + Object.keys(e.keyPattern)[0] + ' ' + e.keyValue[Object.keys(e.keyPattern)[0]] + ' ya existe');
          }
          res.status(500).json('Se presento un error interno en el servidor');
        }
      })
    } catch (error) {
      debug('Error line 51', error.message)
      res.status(500).json('Se presento un error interno en el servidor');
    }
  }

  static async updateProduct(req, res) {
    try {
      const id = req.params.id;
      const dataToUpdate = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category
      }

      if (req.files && ('logo' in req.files)) {
        if (req.files.logo.mimetype.indexOf('image') < 0) return res.status(400).json('El tipo de archivo seleccionado no es válido');
        let target_path = path.join(__dirname.replace(/controllers/gm, ''), `public/images/products/${req.body.sku}.${req.files.logo.mimetype.replace('image/', '')}`)
        await req.files.logo.mv(target_path)
        dataToUpdate.gallery = `/images/products/${req.body.sku}.${req.files.logo.mimetype.replace('image/', '')}`
      }
      await productsModel.updateOne({_id: id}, dataToUpdate)
      res.status(200).json(`Se actualizaron los datos para el producto ${dataToUpdate.name} de forma exitosa.`)
    } catch (e) {
      debug('Error en la linea 70', e.message)
      if (e.code === 11000) {
        return res.status(400).json('El nombre de usuario ya existe')
      }
      res.status(500).json('Se presento un error interno en el servidor')
    }
  }
}