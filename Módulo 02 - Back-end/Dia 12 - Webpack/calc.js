const functions = require('./functions.js');

let v1 = prompt('Digite o primeiro valor')
let operador = prompt('Digite um operador')
let v2 = prompt('Digite o segundo valor')



switch (operador) {
    case '+':
        functions.somar(Number(v1), Number(v2))
        break
    case '-':
        functions.subtrair(Number(v1), Number(v2))
        break
    case '*':
        functions.multiplicar(Number(v1), Number(v2))
        break
    case '/':
        functions.dividir(Number(v1), Number(v2))
        break
}






