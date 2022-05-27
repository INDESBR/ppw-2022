
// Desenvolver o código da aplicação

let numero = document.querySelector('#numero')
let input = document.querySelector('input')
let button = document.querySelector('button')

button.addEventListener('click', verificar)

function verificar() {

    if (input.value !== '') {

        if (input.value % 2 == 0) {
            numero.innerHTML = 'PAR'
        } else {
            numero.innerHTML = 'ÍMPAR'
        }

    } else if (input.value == '') {
        numero.innerHTML = ''
    }
}

// Identificar bugs existentes

