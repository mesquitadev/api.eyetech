'use strict';
// Dependências do projeto
const express = require('express');
const bodyParser = require('body-parser');
// Instância do Express
const app = express();

// Traduz o conteúdo da request para json 
app.use(bodyParser.json());
// Codificar as urls
app.use(bodyParser.urlencoded({ extended: false }));

// Setando as rotas da aplicação
const router = express.Router(); 

//Definindo Rotas
let route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title : "Node Store API",
        version : "0.0.1"
    });
} );

let create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
} );


// Definindo Uso das Rotas acima
app.use('/products', create);


module.exports = app;