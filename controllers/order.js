const Order = require('../models/order');
const Books = require('../models/book');
const jwt = require('jsonwebtoken');


=======
const Books = require('../models/Book');
const jwt = require('jsonwebtoken');

// Create Order Book
>>>>>>> 6a9de656db6065dce445e2f5a7505091678c9d35
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
<<<<<<< HEAD
            if (authData.roles == 'user') {
=======
            if (authData.hakakses == 'user') {
>>>>>>> 6a9de656db6065dce445e2f5a7505091678c9d35
                Books.findOne({
                    where: {
                        id: req.body.bookid
                    }
                }).then(function () {
                    Order.
                    create(values)
                        .then(order => {
                            res.json({
<<<<<<< HEAD
                                message: "Berhasil di order",
=======
                                message: "Data Berhasil di order",
>>>>>>> 6a9de656db6065dce445e2f5a7505091678c9d35
                                data: order
                            });
                        }).catch((error) => {
                            console.log(error);
                        })
                }).catch(function (error) {
                    res.send("Buku tidak ada")
                    console.log(error);
                })
            } else {
<<<<<<< HEAD
                res.status(403).send("Anda tidak order!")
            }
        }
    })
}
=======
                res.status(403).send("Anda tidak order buku")
            }
        }
    })
}
>>>>>>> 6a9de656db6065dce445e2f5a7505091678c9d35
