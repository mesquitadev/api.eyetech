'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title : {
        type : String,
        required : [true, 'O campo Título é requerido!'],
        trim: true
    },
    slug : {
        type : String,
        required : [true, 'O campo Slug é requerido!'],
        trim : true,
        index : true,
        unique : true
    },
    description : {
        type : String,
        required : [true, 'O campo descrição é requerido!'],
        trim : true
    },
    price : {
        type : Number,
        required : [true, 'O campo preço é requerido!']
    },
    active : {
        type : Boolean,
        required : [true, 'O campo ativo é requerido'],
        default : true
    },
    tags : [{
        type : String,
        required : [true, 'O campo tags é requerido']
    }]
});

module.exports = mongoose.model('Product', schema);