// Variáveis

let valoresArmazenados = []

let display = document.querySelector('.display')
let clear = document.querySelector('#clear')
let equal = document.querySelector('#equal')

let numbers = document.querySelectorAll('.btn')
let operations = document.querySelectorAll('.operations')

let arrNumbers = [...numbers]
let arrOperations = [...operations]

// Eventos

arrNumbers.forEach((e)=>{
    e.addEventListener('click', ()=>{
       console.log('clique numero')
    })
})

arrOperations.forEach((e)=>{
    e.addEventListener('click', ()=>{
        console.log('clique operador')
        adicionarValor()
    })
})

equal.addEventListener('click', ()=>{
    console.log('clique equal')
    calcular()
})

// Funções

function adicionarValor(){
    console.log('clique operador')
}

function calcular() {
    console.log('clique operador')
}

function limparTela() {
    console.log('clique operador')
}

function mostrarTela(){
    console.log('clique operador')
}