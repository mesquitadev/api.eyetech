'use strict';
// Dependências do projeto
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Instância do Express
const app = express();
//Conectando ao banco
mongoose.connect('mongodb://localhost:27017/eyetech', { useNewUrlParser : true });

// Carega os Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// Carrega as Rotas
const indexRoutes = require('./routes/indexRoutes'); 
const productRoutes = require('./routes/productRoutes');
const customerRoutes = require('./routes/customerRoute') 
const orderRoutes = require('./routes/orderRoute') 

// Traduz o conteúdo da request para json 
app.use(bodyParser.json());
// Codificar as urls
app.use(bodyParser.urlencoded({
    extended: false 
}));


// Definindo Uso das Rotas 
app.use('/', indexRoutes);
app.use('/products', productRoutes); 
app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);

module.exports = app;