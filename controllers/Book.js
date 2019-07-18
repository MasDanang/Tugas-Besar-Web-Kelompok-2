const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();

const Book = require('../models/Book');

module.exports.postCreate = (req, res) => {
    const values = {
        judul: req.body.judul,
        penerbit: req.body.penerbit,
        pengarang: req.body.pengarang,
        tanggal_masuk: req.body.tanggal_masuk,
        price: req.body.price,
        quantity: req.body.quantity,
    }

    jwt.verify(req.token, process.env.SECRETKEY, (err, userData)=>{
        if (err) {
            res.status(400).send("Error");
        }else{
            if(userData.roles == 'admin' || userData.roles == 'Admin'){
                Book.create(values)
                .then(buku => res.status(201).json({
                    message: 'Berhasil disimpan',
                    data: buku
                })).catch(e => res.json({
                    error: true,
                    message: e
                }))
            }else{
                res.status(400).send('And bukan admin');
            }
        }
    })
   
}




