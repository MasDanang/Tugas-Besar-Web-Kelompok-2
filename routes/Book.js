const express = require('express');

const BookController = require('../controllers/Book');
const Auth = require('../configs/auth');
const router = express.Router();

router.post('/create', Auth.verifyToken ,BookController.postCreate);
router.delete('/delete/:id', Auth.verifyToken ,BookController.postDestroy);
router.put('/update/:id', Auth.verifyToken ,BookController.putUpdate);
router.get('/view', Auth.verifyToken ,BookController.getView);
router.get('/detail/:id', Auth.verifyToken ,BookController.getBook);


module.exports = router