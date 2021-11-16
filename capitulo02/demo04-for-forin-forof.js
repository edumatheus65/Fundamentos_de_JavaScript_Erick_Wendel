const textoPar = "par"
const textoImpar = "impar"

//for (let index = 0; index <= 10; index++) {
//    const decisao = index % 2 === 0 ? textoPar : textoImpar
//    console.log(`O número ${index} é ${decisao}`)
//}

const minhaListaDeTarefas = [
    {
    id: (Math.random() * 10),
    nome: 'Zezinho',
    superPoder: 'Veloz'
},
{
    id: Math.random(),
    nome: 'Mariazinha',
    superPoder: 'Super Força'
}
]

//console.log(minhaListaDeTarefas)

for(let index = 0; index < minhaListaDeTarefas.length; index++) {
    const item = minhaListaDeTarefas[index]
    console.log(

    `
    id: ${item.id}
    nome: ${item.nome}
    `
    )
}

//Não precisa do contador
for(const index in minhaListaDeTarefas) {
    const item = minhaListaDeTarefas[index]
    console.log('Nome', item.nome)
    console.log('id', item.id )
}


// Não precisa usar o index como interador!!
for(const item of minhaListaDeTarefas) {
    console.log('Nome', item.nome)
    console.log('id', item.id)
}
