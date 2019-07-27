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

// Carrega as Rotas
const indexRoutes = require('./routes/indexRoutes'); 
const productRoutes = require('./routes/productRoutes'); 

// Traduz o conteúdo da request para json 
app.use(bodyParser.json());
// Codificar as urls
app.use(bodyParser.urlencoded({
    extended: false 
}));


// Definindo Uso das Rotas 
app.use('/', indexRoutes);
app.use('/products', productRoutes); 

module.exports = app;