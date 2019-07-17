const express = require('express');

const router = express.Router();

const productController = require('../controllers/product');

const auth = require('../configs/auth');

router.get('/', productController.getIndexProduct);

module.exports = router;