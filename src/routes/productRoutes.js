'use strict';
const express = require('express');

const router = express.Router();
const controller = require('../controllers/productController');

// Adiciona Item
router.post('/', controller.post);
//Atualizando item
router.put('/:id', controller.put);
//Deletando item
router.delete('/', controller.delete);


module.exports = router;