const express = require('express');
const router = express.Router();
const {check, body} = require('express-validator');
const {isReseller} = require('../middleware/auth');
const {validation} = require('../middleware/helpers');
const {usersController} = require('../controllers')

router.get('/', isReseller, usersController.get_all_users);

router.post("/create", isReseller, [
  check('username', 'Es necesario ingresar un usuario.').notEmpty().isLength({min: 5}).toLowerCase().trim().escape(),
  check('confirmPassword', 'La contraseña debe tener al menos 5 caracteres de longitud.').isLength({min: 5}).toLowerCase().trim().escape(),
  check('password').isLength({min: 5}).toLowerCase().trim().escape()
    .withMessage('La contraseña debe tener al menos 5 caracteres de longitud.')
    .custom((value, {req}) => value !== req.body.username)
    .withMessage('La contraseña no debe ser igual al nombre de usuario.')
    .custom((value, {req}) => value.indexOf(req.body.document) < 0)
    .withMessage('La contraseña no debe contener su documento de identidad')
    .custom((value, {req}) => value === req.body.confirmPassword)
    .withMessage('La contraseña no coincide con la confirmación de contraseña').isAlphanumeric(),
  check('full_name', 'Debe ingresar un nombre para el usuario').notEmpty().isLength({min: 5}).toUpperCase().trim().escape(),
  check('document_type', 'Debe ingresar un tipo de documento').notEmpty().trim().escape(),
  check('document', 'Debe ingresar un numero de documento').notEmpty().isNumeric().toInt(),
  check('roles', 'Debe ingresar el tipo de usuario').notEmpty().trim().escape(),
  check('phone', 'Debe ingresar un numero de teléfono').isLength({min: 10}).isNumeric().toInt(),
  check('address', 'Debe ingresar una dirección de residencia').notEmpty(),
  check('email', 'Debe ingresar una dirección de correo electrónico').normalizeEmail(),
], validation, usersController.create_user)

router.put('/:id', isReseller, [
  check('username', 'Es necesario ingresar un usuario')
    .notEmpty()
    .withMessage('Es necesario ingresar un nombre de usuario')
    .isLength({min: 5})
    .withMessage('El usuario debe tener al menos 5 caracteres de longitud')
    .toLowerCase().trim().escape(),
  check('full_name', 'Debe ingresar un nombre para el usuario').notEmpty().isLength({min: 5}).toUpperCase().trim().escape(),
  check('document_type', 'Debe ingresar un tipo de documento').notEmpty().trim().escape(),
  check('document', 'Debe ingresar un numero de documento').notEmpty().isNumeric().toInt(),
  check('phone', 'Debe ingresar un numero de teléfono').notEmpty().isLength({min: 10}).isNumeric().toInt(),
  check('address', 'Debe ingresar una dirección de residencia').notEmpty(),
  check('email', 'Debe ingresar una dirección de correo electrónico').normalizeEmail()
], validation, usersController.update_by_id)

module.exports = router;