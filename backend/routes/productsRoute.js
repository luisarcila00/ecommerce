const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const {isUser, isAdmin} = require('../middleware/auth');
const {validation} = require('../middleware/helpers');
const {productController} = require('../controllers')
const moment = require('moment')
moment.locale('es')

router.get('/', isUser, productController.get_all_products);

router.post('/', isAdmin, [
  body('description', 'Descripción no valida').notEmpty().trim().escape().toLowerCase(),
  body('code', 'Código no valido').isNumeric().toInt(),
  body('price', 'Precio no valido').isNumeric().toInt(),
  body('category', 'Categoria no valida').notEmpty(),
], validation, productController.create_product);


module.exports = router;