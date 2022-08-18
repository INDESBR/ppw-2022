const foto = document.querySelector('#foto')
const portfolio = document.querySelector('#portfolio')
const github = document.querySelector('#github')

fetch('https://api.github.com/users/rafaelr92f')
.then((resposta)=>{
    const data = resposta.json()
        .then((data)=>{
            foto.setAttribute('style',`background-image: url(${data.avatar_url})`)
            portfolio.setAttribute('href',`${data.blog}`)
            github.setAttribute('href',`${data.html_url}`)
        })
})



/* const foto = document.querySelector('#foto')
const btn1 = document.querySelector('#portfolio')
const btn2 = document.querySelector('#github')

fetch('https://api.github.com/users/rafaelr92f')
    .then((response) => {
        const data = response.json()
            .then((data) => {
                foto.setAttribute('style', `background-image: url(${data.avatar_url});`)
                btn1.setAttribute('href', `${data.blog}`)
                btn2.setAttribute('href', `${data.html_url}`)
            })
    }) */
