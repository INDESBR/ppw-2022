let pop = document.getElementsByClassName('pop')
let button = document.querySelector('button')

for(let i = 0; i < pop.length; i++){

    pop[i].addEventListener('click', toque)
    button.addEventListener('click', resetar)
    
        
    function toque() {
        pop[i].classList.toggle('pop_down')
    }

    function resetar(){
        pop[i].classList.remove('pop_down')
    }
    
}


