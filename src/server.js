'use strict'
// Dependências do Projeto
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

// Instância do Express
const app = express();
// Definindo a porta e normalizando
const port = normalizePort(process.env.PORT || '5000');
// Setando a porta no express
app.set('port', port)

// Criando Servidor do app
const server = http.createServer(app);
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

// Criando servidor
server.listen(port);
console.log('Api Rodando na porta ' + port);


// Função para normalizar a porta
function normalizePort(val) {
    // Converte o valor para inteiro
    const port = parseInt(val, 10);
    // Se o valor não for um  número, retorna o valor
    if(isNaN(port)) {
        return val;
    }

    // Se a porta for maior ou igual a zero, retorna a porta
    if(port >= 0) {
        return port;
    }
    return false;
}
