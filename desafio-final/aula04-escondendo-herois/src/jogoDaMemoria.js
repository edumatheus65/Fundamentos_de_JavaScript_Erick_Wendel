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

        this.iconePadrao = './arquivos/padrao.png'
        this.heroisEscondidos = []
        
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
        // Vamos esperar 1 segundo para atualizar a tela
        setTimeout(() => {
            this.esconderHerois(copias)
        }, 1000);
    }

    esconderHerois(herois) {
        // Vamos trocar a imagem de todos herois existentes pelo icone padrão.
        // Como nos fizemos no construtor , vamos extrair somente o necessário
        // Então dentro das chaves, vamos extrair somente o nome e o id
        // O source nesse caso não importa
        // E como está na mesma linha eu vou criar parenteses e abrir chaves e 
        // retornar um objeto com os valores que eu quero
        // Se eu não tenho lógica dentro do .map/ .sort eu posso retornar na mesma linha
        // Nesse caso está entre parenteses para retornar um objeto na mesma linha
        // Explicando a sixtaxe: O id está sem os : dois pontos, pois internamente o JS vai olhar para
        // essa variável e vai olhar para o contexto atual. A variavel já foi criada como id então o JS
        // irá pressupor que se não colocamos o : na frente, é para ele olhar aquele id.
        // O nome e o id irão pegar essas variaveis que vieram por parametro dentro do map
        // Daí só vamos alterar a imagem e vou colocar o icone padrão dentro dessa imagem     
        // Usando a sintaxe dentro dos parenteses({ chave: 1}) estamos falando que vamos retornar
        // o que estiver dentro dos parenteses
        // quando não usamos : (exemplo do id), o JS entende que o nome é o mesmo do valor . Ex. id: id, vira id,   
        const heroisOcultos = herois.map(( { nome, id}) => ({
            id,
            nome,
            img: this.iconePadrao
        }))
        // Atualizamos a tela com herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
        // Guardamos os herois para trabalhar com eles depois
        this.heroisOcultos = heroisOcultos 
    }
    jogar() {
        this.embaralhar()
    }
    
}