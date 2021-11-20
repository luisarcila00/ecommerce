const {token} = require('../services');
const {usersModel} = require("../models");
module.exports = {
  login(req, res, next) {
    usersModel.findOne({username: req.body.username}).then(function (user) {
      if (!user) return next({
        status: 404,
        message: {
          message: 'Falló la autenticación. Usuario no encontrado.',
          success: false
        }
      })
      // Revisar si la contraseña coincide
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (!isMatch || err) return next({
          status: 401,
          message: {
            message: 'Falló la autenticación. Contraseña incorrecta.',
            success: false
          }
        })
        // Si encontro usuario y la contraseña coincide crea un token
        user = user.toJSON()
        token.encode({
          id: user._id,
          username: user.username,
          full_name: user.full_name,
          balance: user.balance,
          balance_commission: user.balance_comision,
          password_changed: user.password_changed,
          rol: user.roles
        }).then(token => {
          // Retorna la informacion incluyendo el token
          next({status: 200, message: {success: true, token: token}})
        })
      });
    }, err => {
      next({
        status: 500,
        message: {
          message: 'Se presento un error interno en el servidor',
          success: false
        }
      })
      if (err) throw err;
    });
  }
}
