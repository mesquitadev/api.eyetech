'use strict';
const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const ValidationContract = require('../validators/fluentValidator');
const repository = require('../repositories/productRepository');

/**
 * @author : Victor Mesquita
 * @name : get
 * @type : Get All items 
 * Pega todos os produtos do banco de dados
 */
exports.get = (req, res, next) => {
    //Os dados vem do repository
    repository.get()
    .then(data=>{
        res.status(200).send(data);
    }).catch(e=>{
        res.status(400).send(e);
    });
}

/**
 * @name : getBySlug
 * @author : Victor Mesquita 
 * Busca no Registro pelo Slug do produto
 */
exports.getBySlug = (req, res, next) => {
    //Paâmetro 
    repository.getBySlug(req.params.slug)
    .then(data=>{
        res.status(200).send(data);
    }).catch(e=>{
        res.status(400).send(e);
    });
}

/**
 * @name : getById
 * @author : Victor Mesquita 
 * Busca no Registro pelo ID do produto
 */
exports.getById = (req, res, next) => {
    repository.getById(req.params.id)
    .then(data=>{
        res.status(200).send(data);
    }).catch(e=>{
        res.status(400).send(e);
    });
}

/**
 * @name : getByTag
 * @author : Victor Mesquita 
 * Busca no Registro pela tag do produto
 */
exports.getByTag = (req, res, next) => {
    repository.getByTag(req.params.tag)
    .then(data=>{
        res.status(200).send(data);
    }).catch(e=>{
        res.status(400).send(e);
    });
}

/**
 * @name : Post Data
 * @author : Victor Mesquita
 * Função que salva os dados do produto no Banco
 */
exports.post = (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, 'o Título deve conter pelo menos 3 caracteres.')
    contract.hasMinLen(req.body.slug, 3, 'o Slug deve conter pelo menos 3 caracteres.')
    contract.hasMinLen(req.body.description, 3, 'A Descrição deve conter pelo menos 3 caracteres.')

    if(!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }
    // Dados Vindo do Repository
    repository.create(req.body)
    .then( x =>{
        res.status(201).send({
            message : 'Produto cadastrado com sucesso!'
        });
    }).catch( e =>{
        res.status(400).send({
            message : 'Erro ao cadastrar o produto!',
            data : e
        });
    });
};

/**
 * @name : Put Data
 * @author : Victor Mesquita
 * Função que Atualiza os dados do produto no Banco
 */
exports.put = (req, res, next) => {
    repository.update(req.params.id, req.body).then(x => {
        res.status(201).send({
            message : 'Produto atualizado com sucesso!'
        });
    }).catch(e => {
        res.status(400).send({
            message : 'Falha ao atualizar produto',
            data : e
        })
    })
};

/**
 * @name : Delete Data
 * @author : Victor Mesquita
 * Função que Deleta o produto do Banco
 */
exports.delete = (req, res, next) => {
    repository.delete(req.body.id)
    .then(x => {
        res.status(201).send({
            message : 'Produto removido com sucesso!'
        });
    }).catch(e => {
        res.status(400).send({
            message : 'Falha ao remover produto',
            data : e
        })
    })
};