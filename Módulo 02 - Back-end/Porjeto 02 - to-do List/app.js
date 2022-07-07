const sendButton = document.querySelector('#sendButton')

function evt(evt){
    evt.preventDefault()
}

sendButton.addEventListener('click', evt)
sendButton.addEventListener('click', ()=>{
    console.log('teste')
})