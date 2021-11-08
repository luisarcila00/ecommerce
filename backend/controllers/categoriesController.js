const debug = require('debug')('picommerce:mainController')
const {categoriesModel} = require('../models')
module.exports = class {
  static async get_data(req, res) {
    try {
      let categories = await categoriesModel.find()
      res.status(200).json({result: 'success', data: categories})
    } catch (e) {
      debug('Error', e.message)
      res.redirect('/')
    }
  }

  static async create(req, res) {
    try {
      await categoriesModel.create(req.body)
      return res.status(200).json({result: 'success', message: `Categoria creada con exito`});
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  }
}