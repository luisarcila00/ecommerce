const express = require('express');
const router = express.Router();
const moment = require('moment')
moment.locale('es');
const {validation} = require('../middleware/helpers');
const {body} = require('express-validator');
const {loginController} = require('../controllers')

router.post("/login", [
  body('username', 'Es necesario ingresar un usuario').notEmpty().isLength({min: 5}).toLowerCase().trim().escape(),
  body('password', 'Es necesario ingresar una contraseña').notEmpty().isLength({min: 5}).toLowerCase().trim().escape()
], validation, loginController.login)

router.post("/signup", [
  body('username', 'Es necesario ingresar un usuario').notEmpty().isLength({min: 5}).toLowerCase().trim().escape(),
  body('password', 'Es necesario ingresar una contraseña').notEmpty().isLength({min: 5}).toLowerCase().trim().escape(),
  body('full_name', 'Debe ingresar un nombre para el usuario').notEmpty().isLength({min: 5}).toUpperCase().trim().escape(),
  body('document_type', 'Debe ingresar un tipo de documento').notEmpty().trim().escape(),
  body('document', 'Debe ingresar un numero de documento').notEmpty().isNumeric().toInt(),
  body('roles', 'Debe ingresar el tipo de usuario').notEmpty().trim().escape(),
  body('phone', 'Debe ingresar un numero de telefono').notEmpty().isLength({min: 10}).isNumeric().toInt(),
  body('address', 'Debe ingresar una dirección de residencia').notEmpty(),
  body('email', 'Debe ingresar una dirección de correo electrónico').notEmpty().isEmail().normalizeEmail(),
], validation, loginController.signUp)

module.exports = router;
