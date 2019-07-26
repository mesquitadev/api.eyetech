'use strict';
// Dependências do projeto
const express = require('express');
const bodyParser = require('body-parser');

// Instância do Express
const app = express();
const router = express.Router();
// Carrega as Rotas
const index = require('./routes/index'); 

// Traduz o conteúdo da request para json 
app.use(bodyParser.json());
// Codificar as urls
app.use(bodyParser.urlencoded({ extended: false }));


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
app.use('/', index);
app.use('/products', create);
app.use('/products', put);
app.use('/', del)


module.exports = app;