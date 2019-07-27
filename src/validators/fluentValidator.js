/** 
 * @author : Victor Mesquita
 * @name : Classe de Validação
 * @date : 27/07/2019, 08:03
 * */ 
'use strict';
let errors = [];

function ValidationContract() {
    errors = [];
}  

ValidationContract.prototype.isRequired = (value, message) => {
    if(!value || value.length <= 0) {
        errors.push({ message : message });
    }
}

ValidationContract.prototype.hasMinLen = (value, min, message) => {
    if(!value || value.length < min) {
        errors.push({ message : message });
    }
}

ValidationContract.prototype.isMaxLen = (value, max,  message) => {
    if(!value || value.length > max) {
        errors.push({ message: message });    
    }
}

ValidationContract.prototype.isFixedLen = (value, len, message) => {
    if(value.length != len) {
        errors.push({ message : message });
    }
}

ValidationContract