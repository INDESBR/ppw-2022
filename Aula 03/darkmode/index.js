// Variáveis globais

const btnDarkMode = document.getElementById('btn-darkmode')
    //const el = document.getElementsByTagName('*')
let lightsOn = true

// Adicionar EventListener no botão

btnDarkMode.addEventListener('click', toggleDM)

// Declaração da função toggleDM

function toggleDM() {
    document.body.classList.toggle('darkmode')


    if (lightsOn == true) {
        btnDarkMode.textContent = 'Tema claro'

        lightsOn = false
    } else {
        btnDarkMode.textContent = 'Tema escuro'
        lightsOn = true
    }


    /*    for (let index = 0; index < el.length; index++) {
           el[index].classList.toggle('darkmode')

       } */


}