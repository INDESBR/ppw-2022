const login_container = document.querySelector('#login-container')
const sair = document.querySelector('#sair')
const main_container = document.querySelector('#main-container')
const login_button = document.querySelector('#login-button')
const toggle = document.querySelector('#toggle')

toggle.addEventListener('click', ()=>{
    if(login_button.innerHTML == 'Login'){
        toggle.innerHTML = 'Fazer Login'
        login_button.innerHTML = 'Cadastrar'
    } else {
        toggle.innerHTML = 'Cadastre-se'
        login_button.innerHTML = 'Login'
    }
})

login_button.addEventListener('click', ()=>{
    login_container.classList.remove('display-grid')
    login_container.classList.add('display-none')
    main_container.classList.remove('display-none')
    main_container.classList.add('display-grid')
})

sair.addEventListener('click', ()=>{
    main_container.classList.remove('display-grid')
    main_container.classList.add('display-none')
    login_container.classList.add('display-grid')
    login_container.classList.remove('display-none')
})