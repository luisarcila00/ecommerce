const {token} = require('../services');
const {usersModel} = require("../models");
const debug = require('debug')('picommerce:loginController')
module.exports = {
  login(req, res, next) {
    const {username, password} = req.body
    usersModel.findOne({username}).then(function (user) {
      if (!user) return next({
        status: 404,
        message: {
          message: 'Falló la autenticación. Usuario no encontrado.',
          success: false
        }
      })
      // Revisar si la contraseña coincide
      user.comparePassword(password, function (err, isMatch) {
        if (!isMatch || err) return res.status(401).json('Falló la autenticación. Contraseña incorrecta.')
        // Si encontro usuario y la contraseña coincide crea un token
        user = user.toJSON()
        const usr_token = token.encode({
          id: user._id,
          username: user.username,
          full_name: user.full_name,
          balance: user.balance,
          balance_commission: user.balance_comision,
          password_changed: user.password_changed,
          rol: user.roles
        })
        // Retorna la informacion incluyendo el token
        res.status(200).json(usr_token)
      });
    }, err => {
      debug('Error line 39', err.message)
      res.status(200).json('Se presento un error interno en el servidor')
    });
  }
}
