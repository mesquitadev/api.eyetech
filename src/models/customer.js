'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name : {
        type : String,
        required : [true, 'O campo Nome é requerido!'],
        trim: true
    },
    email :{
        type : String,
        required : [true, 'O campo email é obrigatório!'],
    },
    password : {
        type : String,
        required : [true, 'O campo senha é obrigatório']
    }
    
});

module.exports = mongoose.model('Customer', schema);