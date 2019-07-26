'use strict';
// Dependências do projeto
const express = require('express');
// Instância do Express
const app = express();
// Setando as rotas da aplicação
const router = express.Router(); 

//Definindo Rotas
let route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title : "Node Store API",
        version : "0.0.1"
    });
} );
// Definindo Uso da Rota acima
app.use('/', route);


module.exports = app;