const express = require('express');
const router = express.Router();
const {categoriesController} = require('../controllers')
const {isUser, isAdmin} = require('../middleware/auth');
const {validation} = require('../middleware/helpers');
const {body} = require('express-validator');

router.get('/', isUser, isAdmin, categoriesController.get_data);

router.post('/', isUser, isAdmin, [
  body('name', 'El nombre para la categoria es obligatorio')
], validation, categoriesController.create)
module.exports = router;
