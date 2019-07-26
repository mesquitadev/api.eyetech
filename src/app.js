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

//Atualizando item
let put = router.put('/:id', (req, res, next) => {
    //Pegando id da request
    let id = req.params.id;
    res.status(201).send({
        id : id, 
        item : req.body
    });
} );

//Deletando item
let del = router.delete('/', (req, res, next) => {
    res.status(201).send(req.body);
} );


// Definindo Uso das Rotas acima
app.use('/', route);
app.use('/products', create);
app.use('/products', put);
app.use('/', del)


module.exports = app;