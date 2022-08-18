import { initializeApp } from "firebase/app"

import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth'

import {
    getFirestore,
    collection,
    doc,
    setDoc,
    onSnapshot,
    deleteDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCmiqkhdRaAKD5hRtlKXvXRPB3t1EbdYSI",
    authDomain: "to-do-list-rafael.firebaseapp.com",
    projectId: "to-do-list-rafael",
    storageBucket: "to-do-list-rafael.appspot.com",
    messagingSenderId: "565824112483",
    appId: "1:565824112483:web:dba9d0a132e3d253e7f556"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app)


const telaLogin = document.querySelector('#telaLogin')
const telaTarefas = document.querySelector('#telaTarefas')
const inputEmail = document.querySelector('#inputEmail')
const inputTarefa = document.querySelector('#inputTarefa')
const inputPassword = document.querySelector('#inputPassword')
const btnLogin = document.querySelector('#btnLogin')
const btnInserirTarefa = document.querySelector('#btnInserirTarefa')
const btnLogout = document.querySelector('#btnLogout')
const btnCreateNewUser = document.querySelector('#btnCreateNewUser')
const currentUser = document.querySelector('#currentUser')
const tarefas = document.querySelector('#tarefas')
const qntLis = document.querySelector('#qntLis')
let tasks = 0


btnLogin.addEventListener('click', login)
btnCreateNewUser.addEventListener('click', criarUsuario)
btnLogout.addEventListener('click', logout)
btnInserirTarefa.addEventListener('click', inserirTarefa)



onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        currentUser.innerHTML = user.email
        telaTarefas.classList.remove('hide')
        lerTarefas()

    } else {
        telaTarefas.classList.add('hide')
        currentUser.innerHTML = 'Nenhum usuário logado'
    }
})

function login() {
    if (inputEmail.value !== '' && inputPassword.value !== '') {
        signInWithEmailAndPassword(auth, inputEmail.value, inputPassword.value)
            .then((usuarioLogado) => {
                //currentUser.innerHTML = usuarioLogado.user.email
                console.log(usuarioLogado)
            })
    } else {
        alert('Preencha os campos')
    }
}

function criarUsuario() {
    createUserWithEmailAndPassword(auth, inputEmail.value, inputPassword.value)
        .then((usuarioCadastrado) => {
            console.log(usuarioCadastrado.user)
        })
}

function inserirTarefa() {
    if (inputTarefa.value !== '') {
        setDoc(doc(db, auth.currentUser.uid,`${tasks}`),{
            tarefa: inputTarefa.value
        })
        lerTarefas()
    } else {
        alert('Insira uma tarefa')
    }
}

async function lerTarefas() {

    tarefas.innerHTML = ""
    

    onSnapshot(collection(db, auth.currentUser.uid), (todosOsDocumentos) => {
        tasks = todosOsDocumentos.size
        tarefas.innerHTML = ''
        todosOsDocumentos.forEach(doc => {
            const task = doc.data()
            tarefas.insertAdjacentHTML('afterbegin', `
        <li class="taskLi">
            <span>${task.tarefa}</span>
            <button class="btnDelete" data-id="${doc.id}">Deletar</button>
        </li>`)
        qntLis.innerHTML = tasks
        })

        const btnDelete = document.querySelectorAll('.btnDelete')
        btnDelete.forEach(btn => {
            btn.addEventListener('click', (event) => {
                deletarTarefa(event.target.dataset.id)
            })
        })
    })


}

function deletarTarefa(id) {
    deleteDoc(doc(db, auth.currentUser.uid, id))
}

function logout() {
    auth.signOut()
}

