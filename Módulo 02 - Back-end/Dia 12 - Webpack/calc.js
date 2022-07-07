const prompt = require('prompt');
const functions = require('./functions.js');

prompt.start();

prompt.get(['primeiroValor', 'operador', 'segundoValor'], function (err, result) {

    let v1 = Number(result.primeiroValor)
    let v2 = Number(result.segundoValor)

    switch (result.operador) {
        case '+':
            functions.somar(v1,v2)
            break
        case '-':
            functions.subtrair(v1,v2)
            break
        case '*':
            functions.multiplicar(v1,v2)
            break
        case '/':
            functions.dividir(v1,v2)
            break
    }

});