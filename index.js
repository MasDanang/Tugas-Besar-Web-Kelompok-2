const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());


const homeRouter = require('./routes/home');
const productRouter = require('./routes/product');
const userRouter = require('./routes/User');
const bookRouter = require('./routes/Book');

const sequelize = require('./configs/sequelize');

const Product = require('./models/product');
const User = require('./models/User');
const Book = require('./models/Book');

app.use(homeRouter);
app.use('/product', productRouter);
app.use('/user', userRouter);
app.use('/book', bookRouter);

app.listen(3000, () => {
    console.log('server started');
    // sequelize.sync();
})
