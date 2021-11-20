const {usersModel} = require('../models')
const debug = require('debug')('picommerce:usersController')
module.exports = class usersController {
  static async get_all_users(req, res) {
    try {
      let users = await usersModel.find(req.user.roles === 'admin' ? {} : {parent_id: "" + req.user._id},
        'username full_name balance balance_commision roles creation_date')
      res.status(200).json({result: 'success', data: users})
    } catch (e) {
      debug('Error en la linea 10', e.message)
      res.status(500).json({result: 'error', message: 'Se presento un error interno en el servidor'})
    }
  }

  static create_user(req, res, next) {
    req.body.parent_id = "" + req.user._id
    const newUser = new usersModel(req.body);
    // Guarda el usuario
    newUser.save().then(() => {
      next({status: 200, message: {success: true, message: 'Nuevo usuario creado con éxito.'}})
    }, (err) => {
      if (err.code === 11000) {
        return next({status: 400, message: {success: false, message: 'El nombre de usuario ya existe'}})
      }
      next({status: 400, message: {success: false, message: err.message}})
    });
  }
}