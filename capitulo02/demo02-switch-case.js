const readLine = require('readline')
const terminal = readLine.createInterface({
    // definir modo de entrada via terminal
    input: process.stdin,
    // todo texto de saída
    output:process.stdout
})

const textoMenu = `
Olá, seja bem vindo a sistema de midia.
Digite 1 para acessar o menu inicial
Digite 2 para acessar Herois
Digite 3 para acessar Guerreiros
Digite 0 para acessar sair
`

//console.log('textoMenu',textoMenu)
//const opcao = 2
//switch(opcao) {
//    case 1:
//        console.log('pressionou 1')
//        break; 
//    case 2:
//        console.log('pressinou 2')
//        break;
//    case 3:
//        console.log('pressionou 3')
//}

//terminal.question('Qual o seu nome?', (msg) => {
//    console.log('voce escreveu', msg)
//    terminal.close()
//})

const questoes = {
    menuIncial: {
        texto: textoMenu,
        fn: menuIncial
    },
    opcao1: {
        texto: 'submenu! Pressione enter para selecionar mais opcoes...',
        fn: opcao1
    }
}

function opcao1(msg) {
    console.log('Não há mais opcoes!')
    terminal.close()
}

function menuIncial(msg) {
    const opcao = Number(msg)
    if(isNaN(opcao)) {
        throw new Error('Não é um número', msg)
    } 
    switch(opcao){
        case 0:
                console.log('Saindo...')
                terminal.close()
                break;
        case 1:
            terminal.question(
                questoes.opcao1.texto,
                questoes.opcao1.fn
            )
            break;
        default:
            console.log('Opcao Invalida!')
            
    }
}

terminal.question(
    questoes.menuIncial.texto,
    questoes.menuIncial.fn
)