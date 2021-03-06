const Order = require('../models/order');
const Books = require('../models/Book');
const jwt = require('jsonwebtoken');


module.exports.postOrder = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if (error) {
            res.json({
                message: error
            });
        } else {
            let values = {
                tanggal_order: req.body.tanggal_order,
                userId: authData.id,
                bookId: req.body.bookid
            }
            if (authData.roles == 'user') {
                Books.findOne({
                    where: {
                        id: req.body.bookid
                    }
                }).then(function () {
                    Order.
                    create(values)
                        .then(order => {
                            res.json({
                                message: "Berhasil di order",
                                data: order
                            });
                        }).catch((error) => {
                            console.log(error);
                        })
                }).catch(function (error) {
                    res.send("BERHASIL ORDER")
                    console.log(error);
                })
            } else {
                res.status(403).send("Anda tidak order!")
            }
        }
    })
}