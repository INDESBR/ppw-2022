fetch('https://api.github.com/users/rafaelr92f') // GET
    .then((resposta) => {
        const data = resposta.json()
            .then((data) => {
                showData(data)
                showPhoto(data)
                showName(data.name)
            })
    })
    
const showData = (result) => {
    for (value in result) {
        if (document.querySelector('#' + value)) {
            document.querySelector('#' + value).setAttribute('href', result[value])
        }
    }
}

const showPhoto = (result) => {
    for (value in result) {
        if (document.querySelector('#' + value)) {
            document.querySelector('#' + value).setAttribute('style', `background-image: url(${result[value]})`)
        }
    }
}

const showName = (result) => {
    document.querySelector('#name').innerHTML = result
}







