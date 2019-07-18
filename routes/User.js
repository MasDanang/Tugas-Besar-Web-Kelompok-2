const express = require('express');

const UserController = require('../controllers/User');

const router = express.Router();

router.post('/register', UserController.postRegister);
router.post('/login', UserController.postLogin);
router.post('/delete', UserController.postDestroy);
router.post('/update', UserController.postUpdate);

module.exports = router;  
