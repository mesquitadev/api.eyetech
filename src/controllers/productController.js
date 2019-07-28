'use strict';
const mongoose = require('mongoose');
const ValidationContract = require('../validators/fluentValidator');
const repository = require('../repositories/productRepository');

/**
 * @author : Victor Mesquita
 * @name : get
 * @type : Get All items 
 * Pega todos os produtos do banco de dados
 */
exports.get = async(req, res, next) => {
   try{
        var data = await repository.get();
        res.status(200).send(data);
   } catch (e) {
       res.status(500).send({
           message : 'Falha ao processar sua requisição'
       });
   }
}

/**
 * @name : getBySlug
 * @author : Victor Mesquita 
 * Busca no Registro pelo Slug do produto
 */
exports.getBySlug = async(req, res, next) => {
    try{
        var data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message : 'Falha ao processar sua requisição'
        });
    }
}

/**
 * @name : getById
 * @author : Victor Mesquita 
 * Busca no Registro pelo ID do produto
 */
exports.getById = async(req, res, next) => {
    try{
        var data = await repository.getById(req.params.id)
        res.tatus(200).send(data);
    } catch (e) {
        res.status(500).send({
            message : 'Falha ao processar sua requisição'
        });
    }
    
}

/**
 * @name : getByTag
 * @author : Victor Mesquita 
 * Busca no Registro pela tag do produto
 */
exports.getByTag = async(req, res, next) => {
    try {
        var data = await repository.getByTag(req.params.tag)
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message : 'Falha ao processar sua requisição'
        });
    }
    
}

/**
 * @name : Post Data
 * @author : Victor Mesquita
 * Função que salva os dados do produto no Banco
 */
exports.post = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, 'o Título deve conter pelo menos 3 caracteres.')
    contract.hasMinLen(req.body.slug, 3, 'o Slug deve conter pelo menos 3 caracteres.')
    contract.hasMinLen(req.body.description, 3, 'A Descrição deve conter pelo menos 3 caracteres.')

    if(!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }
    try {
        // Dados Vindo do Repository
        await repository.create(req.body)
        res.status(201).send({
            message : 'Produto cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message : 'Falha ao processar sua requisição'
        });
    }
};

/**
 * @name : Put Data
 * @author : Victor Mesquita
 * Função que Atualiza os dados do produto no Banco
 */
exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(201).send({
            message : 'Produto atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message : 'Falha ao processar sua requisição'
        });
    }
    
};

/**
 * @name : Delete Data
 * @author : Victor Mesquita
 * Função que Deleta o produto do Banco
 */
exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id)
        res.status(201).send({
            message : 'Produto removido com sucesso!'
        });s
    } catch (e) {
        res.status(500).send({
            message : 'Falha ao processar sua requisição'
        });
    }
};