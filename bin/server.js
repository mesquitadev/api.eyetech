'use strict'
// Dependências do Projeto
const app = require('../src/app');
const http = require('http');
const debug = require('debug')('eyetech:server');

// Definindo a porta e normalizando
const port = normalizePort(process.env.PORT || '5000');
// Setando a porta no express
app.set('port', port)

// Criando Servidor do app
const server = http.createServer(app);

// Criando servidor
server.listen(port);
// Verifica quando há erro
server.on('error', onError);
// Verifica o debug para ver erros da aplicação no evento listening
server.on('listening', onListening);
console.log('#############################################')
console.log('\t    EyeTech EyeOS')
console.log('\tApi Rodando na porta ' + port);
console.log('#############################################')


/** 
 * @name : normalizePort
 * @author : Victor Mesquita
 * @date : 26/07/2019 18:30
 * Função para normalizar a porta e retornar em número
 * @param val -> Recebe o valor da porta
**/
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
/** 
 * @name : onError
 * @author : Victor Mesquita
 * @date : 26/07/2019 18:50
 * Função para tratar os erros das portas
 * @param error -> Recebe o valor do erro do servidor -> gerado automaticamente
**/
function onError(error) {
    if(error.syscall !== 'listen') {
        throw error;
    } 

    const bind = typeof port === 'string' ? 
        'Pipe ' + port :
        'Port ' + port;
    switch(error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/** 
 * @name : onListening
 * @author : Victor Mesquita
 * @date : 26/07/2019 19:00
 * Função para fazer o debug da aplicação
**/
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on' + bind);
}