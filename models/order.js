const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');
const Book = require('../models/Book');
const user = require('../models/user');

class Order extends Sequelize.Model {}

Order.init({
    tanggal_order: Sequelize.STRING
}, {
    sequelize,
    modelName: 'order'
});


Order.belongsTo(user);
Order.belongsTo(Book);

module.exports = Order;