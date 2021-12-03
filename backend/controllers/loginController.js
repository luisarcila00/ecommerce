const {token} = require('../services');
const {usersModel} = require("../models");
const debug = require('debug')('picommerce:loginController')
module.exports = {
  login(req, res, next) {
    const {username, password} = req.body
    usersModel.findOne({username}).then(function (user) {
      if (!user) return res.status(400).json('Usuario no encontrado.')
      // Revisar si la contraseña coincide
      user.comparePassword(password, function (err, isMatch) {
        if (!isMatch || err) return res.status(401).json('Contraseña incorrecta.')
        // Si encontro usuario y la contraseña coincide crea un token
        user = user.toJSON()
        const usr_token = token.encode({id: user._id})
        // Retorna la informacion incluyendo el token
        res.status(200).json({usr_token, rol: user.roles})
      });
    }, err => {
      debug('Error line 39', err.message)
      res.status(200).json('Se presento un error interno en el servidor')
    });
  }
}
