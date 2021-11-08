const express = require('express');
const router = express.Router();

router.use('/categories', require('./categoriesRoute'));
router.use('/', require('./loginRoute'));
router.use('/products', require('./productsRoute'));

module.exports = router;
