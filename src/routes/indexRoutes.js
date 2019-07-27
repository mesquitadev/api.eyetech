'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title : "EyeTech OS Api",
        version : "0.0.2",
        site: "www.eyetech.com.br" 
    });
});

module.exports = router;