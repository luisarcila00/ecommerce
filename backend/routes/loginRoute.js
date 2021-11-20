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


module.exports = router;
