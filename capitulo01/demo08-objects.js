const heroi = {
    nome: 'Flash',
    idade: 100,
    sexo: 'Masculino'
}

//console.log('nome', heroi.nome)
//console.log('idade', heroi['idade'])
//console.log('sexo', heroi.sexo)
//console.log('naoExiste', heroi.naoExiste)

// Aqui eu não estou reassinando a instância do heroi estou passando ou alterando a instancia do heroi com novas chaves
//heroi.id = 0001
//console.log(heroi)

//Saber chaves 
console.log(Object.keys(heroi))

//Saber valores
//console.log(Object.values(heroi))

//Juntar dois objetos
//const pessoa = {
  //  tamanho: '10 metros'
//}

//const novoObj  = Object.assign(heroi, pessoa)
//console.log(novoObj)
//delete novoObj.nome
//console.log(novoObj)