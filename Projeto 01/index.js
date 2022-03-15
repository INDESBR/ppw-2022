let score1 = document.getElementById('sp1')
let score2 = document.getElementById('sp2')

let escolhaJogador
let escolhaCPU

let pts1 = 0
let pts2 = 0

const cardJogador = document.getElementById('cardJogador')
const cardCPU = document.getElementById('cardCPU')

const yourTurn = document.getElementById('yourTurn')
const resultado = document.getElementById('resultado')
const reset = document.getElementById('reset')


const play = document.getElementById('play').addEventListener('click', () => {
    jogada()
})

const playAgain = document.getElementById('play-again').addEventListener('click', () => {
    reiniciar()
})

const pedra = document.getElementById('opt1').addEventListener('click', () => {
    escolhaJogador = 'pedra'
    mudarImagem(cardJogador, 'pedra')
})

const papel = document.getElementById('opt2').addEventListener('click', () => {
    escolhaJogador = 'papel'
    mudarImagem(cardJogador, 'papel')
})

const tesoura = document.getElementById('opt3').addEventListener('click', () => {
    escolhaJogador = 'tesoura'
    mudarImagem(cardJogador, 'tesoura')
})


function jogada() {

    sortear()
    analisar()
    resetar()

}







function mudarImagem(card, classe) {
    if (card == cardJogador) {
        cardJogador.classList.remove('pedra', 'papel', 'tesoura')
        cardJogador.classList.toggle(classe)
    } else if (card == cardCPU) {
        cardCPU.classList.remove('pedra', 'papel', 'tesoura')
        cardCPU.classList.toggle(classe)
    }

}


function analisar() {
    if (escolhaCPU == escolhaJogador) {
        resultado.textContent = 'Empatou!'

    } else if (escolhaCPU == 'pedra' && escolhaJogador == 'papel') {
        pts1 += 1
        score1.textContent = pts1
        resultado.textContent = 'Você Venceu!'
    } else if (escolhaCPU == 'pedra' && escolhaJogador == 'tesoura') {
        pts2 += 1
        score2.textContent = pts2
        resultado.textContent = 'A CPU Venceu u.u'

    } else if (escolhaCPU == 'papel' && escolhaJogador == 'tesoura') {
        pts1 += 1
        score1.textContent = pts1
        resultado.textContent = 'Você Venceu!'
    } else if (escolhaCPU == 'papel' && escolhaJogador == 'pedra') {
        pts2 += 1
        score2.textContent = pts2
        resultado.textContent = 'A CPU Venceu u.u'

    } else if (escolhaCPU == 'tesoura' && escolhaJogador == 'pedra') {
        pts1 += 1
        score1.textContent = pts1
        resultado.textContent = 'Você Venceu!'
    } else if (escolhaCPU == 'tesoura' && escolhaJogador == 'papel') {
        pts2 += 1
        score2.textContent = pts2
        resultado.textContent = 'A CPU Venceu u.u'
    }

}

function resetar() {
    yourTurn.style.display = 'none'
    reset.style.display = 'block'

}


function sortear() {
    let resultadoSorteio = Math.floor(Math.random() * 3 + 1)
    jogadaMaquina(resultadoSorteio)
}

function jogadaMaquina(valor) {

    switch (valor) {
        case 1:
            escolhaCPU = 'pedra'
            mudarImagem(cardCPU, 'pedra')
            break
        case 2:
            escolhaCPU = 'papel'
            mudarImagem(cardCPU, 'papel')
            break
        case 3:
            escolhaCPU = 'tesoura'
            mudarImagem(cardCPU, 'tesoura')
            break
    }

}

function reiniciar() {
    yourTurn.style.display = 'block'
    reset.style.display = 'none'
    mudarImagem(cardCPU, '')
}