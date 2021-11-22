const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const {isReseller} = require('../middleware/auth');
const {validation} = require('../middleware/helpers');
const {usersController} = require('../controllers')

router.get('/', isReseller, usersController.get_all_users);

router.post("/create", isReseller, [
  body('username', 'Es necesario ingresar un usuario').notEmpty().isLength({min: 5}).toLowerCase().trim().escape(),
  body('password', 'Es necesario ingresar una contraseña').notEmpty().isLength({min: 5}).toLowerCase().trim().escape(),
  body('full_name', 'Debe ingresar un nombre para el usuario').notEmpty().isLength({min: 5}).toUpperCase().trim().escape(),
  body('document_type', 'Debe ingresar un tipo de documento').notEmpty().trim().escape(),
  body('document', 'Debe ingresar un numero de documento').notEmpty().isNumeric().toInt(),
  body('roles', 'Debe ingresar el tipo de usuario').notEmpty().trim().escape(),
  body('phone', 'Debe ingresar un numero de telefono').notEmpty().isLength({min: 10}).isNumeric().toInt(),
  body('address', 'Debe ingresar una dirección de residencia').notEmpty(),
  body('email', 'Debe ingresar una dirección de correo electrónico').normalizeEmail(),
], validation, usersController.create_user)

router.put('/:id', isReseller, [
  body('username', 'Es necesario ingresar un usuario').notEmpty().isLength({min: 5}).toLowerCase().trim().escape(),
  body('full_name', 'Debe ingresar un nombre para el usuario').notEmpty().isLength({min: 5}).toUpperCase().trim().escape(),
  body('document_type', 'Debe ingresar un tipo de documento').notEmpty().trim().escape(),
  body('document', 'Debe ingresar un numero de documento').notEmpty().isNumeric().toInt(),
  body('phone', 'Debe ingresar un numero de telefono').notEmpty().isLength({min: 10}).isNumeric().toInt(),
  body('address', 'Debe ingresar una dirección de residencia').notEmpty(),
  body('email', 'Debe ingresar una dirección de correo electrónico').normalizeEmail()
], validation, usersController.update_by_id)

module.exports = router;