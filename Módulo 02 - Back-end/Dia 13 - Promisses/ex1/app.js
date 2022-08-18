function teste(){
    setTimeout(()=>{console.log('2')}, 3000)
}

//const teste = setTimeout(()=>{console.log('2')}, 1000)

console.log('1')
teste() // segura aí 3 segundos
console.log('3')
console.log('4')
console.log('5')


