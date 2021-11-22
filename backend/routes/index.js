const express = require('express');
const router = express.Router();

router.use('/categories', require('./categoriesRoute'));
router.use('/', require('./loginRoute'));
router.use('/products', require('./productsRoute'));
router.use('/users', require('./usersRoute'));
router.use('/', require('./regionsRoute'));

module.exports = router;
