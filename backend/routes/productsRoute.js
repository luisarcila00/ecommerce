const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const {isUser, isAdmin} = require('../middleware/auth');
const {validation} = require('../middleware/helpers');
const {productController} = require('../controllers')

router.get('/', productController.get_all_products);
router.get('/:id', isAdmin, productController.get_product_by_Id);

router.put('/:id',isAdmin,productController.updateProduct)
router.post('/', isAdmin, [
  body('description', 'Descripción no valida').notEmpty().trim().escape().toLowerCase(),
  body('sku', 'SKU no valido').notEmpty().trim().escape().toLowerCase(),
  body('price', 'Precio no valido').isNumeric().toInt(),
  body('category', 'Categoria no valida').notEmpty(),
], validation, productController.create_product);


module.exports = router;