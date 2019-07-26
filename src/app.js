'use strict';
// Dependências do projeto
const express = require('express');
const bodyParser = require('body-parser');

// Instância do Express
const app = express();

// Carrega as Rotas
const indexRoutes = require('./routes/indexRoutes'); 
const productRoutes = require('./routes/productRoutes'); 

// Traduz o conteúdo da request para json 
app.use(bodyParser.json());
// Codificar as urls
app.use(bodyParser.urlencoded({
    extended: false 
}));


// Definindo Uso das Rotas acima
app.use('/', indexRoutes);
app.use('/products', productRoutes); 

module.exports = app;