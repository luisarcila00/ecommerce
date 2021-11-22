const {usersModel} = require('../models')
const debug = require('debug')('picommerce:usersController')
module.exports = class usersController {
  static async get_all_users(req, res) {
    try {
      let users = await usersModel.find(req.user.roles === 'admin' ? {} : {parent_id: "" + req.user._id},
        'username full_name balance balance_commision roles creation_date')
      res.status(200).json(users)
    } catch (e) {
      debug('Error en la linea 10', e.message)
      res.status(500).json('Se presento un error interno en el servidor')
    }
  }

  static async get_by_id(req, res) {
    try {
      const id = req.params.id;
      let users = await usersModel.find(req.user.roles === 'admin' ? {_id: id} : {
        parent_id: "" + req.user._id,
        _id: id
      })
      debugger
      res.status(200).json(users)
    } catch (e) {
      debug('Error en la linea 10', e.message)
      res.status(500).json('Se presento un error interno en el servidor')
    }
  }

  static create_user(req, res) {
    req.body.parent_id = "" + req.user._id
    if (req.body.password !== req.body.confirmPassword) return res.status(400).json('La contraseña no coincide con la confirmación de contraseña')
    const newUser = new usersModel(req.body);
    // Guarda el usuario
    newUser.save().then(() => {
      res.status(200).json('Nuevo usuario creado con éxito.')
    }, (err) => {
      if (err.code === 11000) {
        return res.status(400).json('El nombre de usuario ya existe')
        //return next({status: 400, message: {success: false, message: 'El nombre de usuario ya existe'}})
      }
      return res.status(400).json(err.message)
      //next({status: 400, message: {success: false, message: err.message}})
    });
  }
}