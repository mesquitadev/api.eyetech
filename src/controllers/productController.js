'use strict';
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.post = (req, res, next) => {
    // Instância do Modelo, com os parâmetros da request
    var product = new Product(req.body);
    // product.title = req.body.title;
    // Salva no Banco Mongoose
    product.save().then(x=>{
        res.status(201).send({
            message : 'Produto cadastrado com sucesso!'
        });
    }).catch(e=>{
        res.status(400).send({
            message : 'Erro ao cadastrar o produto!',
            data : e
        });
    });
    
};

exports.put = (req, res, next) => {
    //Pegando id da request
    let id = req.params.id;
    res.status(201).send({
        id : id, 
        item : req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(201).send(req.body);
};