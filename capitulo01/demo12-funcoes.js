function nomeDaFuncao(parametro1) {
    // bloco do codfigo
}

function queDiaEhoje(){
    const data = new Date()
    console.log(`Hoje é dia: ${data.getDate()}`)
}
queDiaEhoje()

function soma(valor1, valor2) {
    console.log(`A soma de ${valor1} + ${valor2} é`, valor1 + valor2)
}

soma(10, 20)
soma(3,4)

// funcoes podem retornar valores

function soma(valor1, valor2) {
    return valor1 + valor2
}

const idade = 20
const tamanho = 10
const resultado = soma(idade, tamanho)
console.log('resultado', resultado)

function multiplicar(valor1, valor2) {
    const resultado = valor1 * valor2
    return resultado    
}
console.log(`O resutlado da multiplicacao é:`, multiplicar(10, 30))

const funcionario1 = {
    nome: 'Zezinho',
    desconto:  0.2,
    salarioBruto: 2000,
    salarioLiquido: 0
}

const funcionario2 = {
    nome: 'Mariazinha',
    desconto: 0.1,
    salarioBruto: 2000,
    salarioLiquido: 0
}

//const funcionario1 = 
//funcionario1.salarioBruto - ( funcionario1.desconto * funcionario1.salarioBruto)

//const funcionario2 = 
//funcionario2.salarioBruto - ( funcionario2.desconto * funcionario2.salarioBruto)

//console.log(
//    `Funcionario1: ${descontoFuncionario1}
//    Funcionrio2: ${descontoFuncionario2}`
//)

function CalcularDesconto(salarioBruto, desconto) {
    return salarioBruto - (salarioBruto * desconto)
}

funcionario1.salarioLiquido =  CalcularDesconto(
    funcionario1.salarioBruto,
    funcionario1.desconto
)

funcionario2.salarioLiquido = CalcularDesconto(
    funcionario2.salarioBruto,
    funcionario2.desconto
)

console.log(
    `Salario ${funcionario1.nome}: ${funcionario1.salarioLiquido}
     Salario ${funcionario2.nome}: ${funcionario2.salarioLiquido}
    `
)