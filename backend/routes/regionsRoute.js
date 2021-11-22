const express = require('express');
const router = express.Router();
const {isUser} = require('../middleware/auth');
const {regionsController} = require('../controllers')

router.get('/getstates', isUser, regionsController.get_states);
router.get('/getcities/:state', isUser, regionsController.get_cities);



module.exports = router;