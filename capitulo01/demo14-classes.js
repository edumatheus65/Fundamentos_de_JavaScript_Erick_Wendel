class Heroi {
    atacar(){
        console.log(`atacou!!`)
    }
    defender(){
        console.log(`defendeu`)
    }
}

const heroi = new Heroi()
heroi.atacar() 
heroi.defender()

// Usando constructor

class Heroi2 {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    atacar() {
        console.log(
            `O ${this.nome} atacou!!`
        )
    }
}

const heroi2 = new Heroi2(
    'Flash', 80
)
heroi2.atacar()

class Heroi3 {
    static obterAnoNascimento(idade) {
        return 2021 -idade
    }
}

const AnoNascimento = Heroi3.obterAnoNascimento(31)
console.log(
    `O ano de nascimento do Heroi é: ${AnoNascimento}`
)

//****EXERCÍCIOS********/

//class Test { hello() { console.log('Olá')} }

//new Test()['hello']()  // ou new Test()['hello']()

//class Test { static hello() { console.log('Olá')} }

//Test['hello']() // ou Test.hello()

class Test { constructor() { console.log( 'Olá mundo!' ) } }

new Test()
