class JogoDaMemoria {
    // 3o importar a tela como dependencia
    // iria funcionar sem importar chamando a variavel Tela global
    // mas não é uma boa prática, a melhor prática é obter esse valor por dependencia
    // depois usar a partir do this
    
    constructor({ tela }) {
        this.tela = tela

        this.heroisIniciais = [
            { img: './arquivos/batman.png', name: 'batman'},
            { img: './arquivos/frank.png', name: 'frank'},
            { img: './arquivos/groot.png', name: 'groot'},
            { img: './arquivos/mulhermaravilha.png', name: 'mulhermaravilha'},
        ]
        
    }

    // 1o -para usar o this, nao podemos usar o static
    inicializar() {
        // 2o - vamos precisar importar a tela para fazer alterações nela
        // 3o - chamar a funcao de tela apara atualizar as imagens
        this.tela.atualizarImagens(this.heroisIniciais)
        // Força a tela a usar this do contexto atual
        // A unica função do bind é manter as variáveis desta classe tambpem na outra classe quando executada
        // Então lá na tela quando ela chamar essa função o this dele vai ter o inicializar os herois iniciais
        // E tudo que tem dentro dessa clase, dentro do contexto dele.
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }
    // Função embaralhar é praticamente o coração do nosso projeto, aqui dentro vamos fazer toda a lógica
    // para manipular as cartas ou oculta-las dentro do nosso projeto
    embaralhar() {
        const copias = this.heroisIniciais
        // duplicar itens, eu criei um array com mais outro array, pois eu tinha os 4 herois iniciais
        // como usei o concat ele pegou estes 4 e usou ele duas vezes.
        .concat(this.heroisIniciais)
        // Entrar em cada item e criar um ID aleatório
        // Dentro do .map vamos usar o objct.assign para ele concatenar um objeto.                  
        // Vamos criar um objeto vazio e pegar o item que tem a imagem e o nome do heroi
        // em seguida criar uma nova propriedade, chama-la de id, criando um id randomico
        // e divdir por 0.5 para dar qualquer número aleatorio e dar uma possibilidade menor 
        // de cair dois com o mesmo id
        .map(item => {
            return Object.assign({}, item, { id: Math.random() / 0.5})
        })
        // ordernar aleatoriamente
        // Vamos usar o .sort para ele ordenar e bagunçar os herois e vamos colocar o - menos
        // para o sort verificar cada um dos itens e gerar uma ordem aleatoria.
        .sort(() => Math.random() - 0.5)
        this.tela.atualizarImagens(copias)

        this.tela.atualizarImagens(copias)
    }
    jogar() {
        this.embaralhar()
    }
    
}