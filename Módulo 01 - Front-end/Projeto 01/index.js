// Capturando elementos HTML
const circulos = document.querySelectorAll('.circulo') // Nodelist
const img_player01 = document.querySelector('#img_player01')
const img_player02 = document.querySelector('#img_player02')
const placar_player01 = document.querySelector('#placar_player01')
const placar_player02 = document.querySelector('#placar_player02')
const btn_jogar = document.querySelector('#btn_jogar')
const btn_recomecar = document.querySelector('#btn_recomecar')
const telaJogar = document.querySelector('#tela_jogar')
const telaRecomecar = document.querySelector('#tela_recomecar')
const resultado = document.querySelector('#resultado')


// Variaveis para analise
let escolhaJogador
let escolhaCPU
let pontosJogador = 0
let pontosCPU = 0


// Convertendo Nodelist para Array
const opcoes = [...circulos]


// Adicionando eventos
opcoes.forEach((opcao) => {
    opcao.addEventListener('click', () => {

        //mudarEscolhaJogador()

        escolhaJogador = opcoes.indexOf(opcao)

        switch (escolhaJogador) {
            case 0:
                img_player01.setAttribute('src', './assets/pedra.png')
                break
            case 1:
                img_player01.setAttribute('src', './assets/papel.png')
                break
            case 2:
                img_player01.setAttribute('src', './assets/tesoura.png')
                break
        }

        // ativarCirculos()
        
        for (value in opcoes) {
            opcoes[value].classList.remove('circulo_ativo')
        }

        opcao.classList.toggle('circulo_ativo')
       
    })
})

btn_jogar.addEventListener('click', jogar)

btn_recomecar.addEventListener('click', recomecar)


// Função principal
function jogar() {

    jogadaCPU()
    analise()
    mostrarResultado()

    // Definição dos valores do placar
    placar_player01.textContent = pontosJogador
    placar_player02.textContent = pontosCPU

}


// Funções declaradas:

function jogadaCPU() {
    escolhaCPU = Math.floor(Math.random() * 3)

    switch (escolhaCPU) {
        case 0:
            img_player02.setAttribute('src', './assets/pedra.png')
            break
        case 1:
            img_player02.setAttribute('src', './assets/papel.png')
            break
        case 2:
            img_player02.setAttribute('src', './assets/tesoura.png')
            break
    }
}

function analise() {
    if (escolhaCPU == escolhaJogador) {
        resultado.textContent = 'Empatou!'

    } else if (escolhaCPU == 0 && escolhaJogador == 1) {
        pontosJogador += 1
        resultado.textContent = 'Você Venceu!'

    } else if (escolhaCPU == 0 && escolhaJogador == 2) {
        pontosCPU += 1
        resultado.textContent = 'A CPU Venceu u.u'

    } else if (escolhaCPU == 1 && escolhaJogador == 2) {
        pontosJogador += 1
        resultado.textContent = 'Você Venceu!'

    } else if (escolhaCPU == 1 && escolhaJogador == 0) {
        pontosCPU += 1
        resultado.textContent = 'A CPU Venceu u.u'

    } else if (escolhaCPU == 2 && escolhaJogador == 0) {
        pontosJogador += 1
        resultado.textContent = 'Você Venceu!'

    } else if (escolhaCPU == 2 && escolhaJogador == 1) {
        pontosCPU += 1
        resultado.textContent = 'A CPU Venceu u.u'

    }
}

function mostrarResultado() {
    telaRecomecar.style.display = 'block'
    telaJogar.style.display = 'none'
}

function recomecar() {
    telaRecomecar.style.display = 'none'
    telaJogar.style.display = 'block'
}


