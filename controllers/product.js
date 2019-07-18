const Product = require('../models/product');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports.getIndexProduct = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData)=>{
        if(error){
            res.sendStatus(403);
        }else{
            res.json({
                message: 'OK',
                authData: authData
            })
        }
    })
}
