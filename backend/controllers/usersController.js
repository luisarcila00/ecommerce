const {usersModel} = require('../models')
const debug = require('debug')('picommerce:usersController')
module.exports = class usersController {
  static async get_all_users(req, res) {
    try {
      let users = await usersModel.find(req.user.roles === 'admin' ? {} : {parent_id: "" + req.user._id},
        'full_name document_type birth_date document username address phone email roles state city balance')
      res.status(200).json(users)
    } catch (e) {
      debug('Error en la linea 10', e.message)
      res.status(500).json('Se presento un error interno en el servidor')
    }
  }

  static create_user(req, res) {
    const usuario = {
      full_name: req.body.full_name,
      document_type: req.body.document_type,
      document: req.body.document,
      birth_date: req.body.birth_date,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone,
      state: req.body.state,
      city: req.body.city,
      username: req.body.username,
      roles: req.body.roles,
      password: req.body.password,
      parent_id: "" + req.user._id
    }
    const newUser = new usersModel(usuario);
    // Guarda el usuario
    newUser.save().then(() => {
      res.status(200).json('Nuevo usuario creado con éxito.')
    }, (e) => {
      debug('Error en la linea 36', e.message)
      if (e.code === 11000) {
        return res.status(400).json('El nombre de usuario ya existe')
      }
      res.status(500).json('Se presento un error interno en el servidor')
    });
  }

  static async update_by_id(req, res) {
    try {
      const id = req.params.id;
      const dataToUpdate = {
        full_name: req.body.full_name,
        document_type: req.body.document_type,
        document: req.body.document,
        birth_date: req.body.birth_date,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone,
        state: req.body.state,
        city: req.body.city,
        username: req.body.username,
      }
      await usersModel.updateOne(req.user.roles === 'admin' ? {_id: id} : {
        parent_id: "" + req.user._id,
        _id: id
      }, dataToUpdate)
      res.status(200).json('Se actualizaron los datos del usuario de forma exitosa.')
    } catch (e) {
      debug('Error en la linea 65', e.message)
      if (e.code === 11000) {
        return res.status(400).json('El nombre de usuario ya existe')
      }
      res.status(500).json('Se presento un error interno en el servidor')
    }
  }
}