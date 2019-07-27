'use strict';
const express = require('express');

const router = express.Router();
const controller = require('../controllers/productController');

// Get all items
router.get('/', controller.get);
// Get By Slug
router.get('/:slug', controller.getBySlug);
// Get By Id
router.get('/admin/:id', controller.getById);
// Get By Id
router.get('/tags/:tag', controller.getByTag);


// Adiciona Item
router.post('/', controller.post);
//Atualizando item
router.put('/:id', controller.put);
//Deletando item
router.delete('/', controller.delete);


module.exports = router;