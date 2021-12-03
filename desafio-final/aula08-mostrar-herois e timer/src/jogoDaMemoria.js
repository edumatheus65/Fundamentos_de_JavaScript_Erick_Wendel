class JogoDaMemoria {
    // 3o importar a tela como dependencia
    // iria funcionar sem importar chamando a variavel Tela global
    // mas não é uma boa prática, a melhor prática é obter esse valor por dependencia
    // depois usar a partir do this
    
    constructor({ tela, util }) {
        this.tela = tela
        this.util = util

        this.heroisIniciais = [
            { img: './arquivos/batman.png', nome: 'batman'},
            { img: './arquivos/frank.png', nome: 'frank'},
            { img: './arquivos/groot.png', nome: 'groot'},
            { img: './arquivos/mulhermaravilha.png', nome: 'mulhermaravilha'},
        ]

        this.iconePadrao = './arquivos/padrao.png'
        this.heroisEscondidos = []
        this.heroisSelecionados = []
        
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
        //Objetivo: Vamos criar essa função dentro da tela para quando alguém clicar naquele item especifico
        // ele executar essa função que está dentro do jogoDaMemoria.js
        // Não criei essa função na tela, pois o objetivo da tela é só mudar o que se ve.
        // O objetivo dessa class jogoDaMemoria é interferir na lógica de como as coisas funcionam
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
        this.tela.configurarBotaoMostrarTudo(this.mostrarHeroisEscondidos.bind(this))
    }
    // Função embaralhar é praticamente o coração do nosso projeto, aqui dentro vamos fazer toda a lógica
    // para manipular as cartas ou oculta-las dentro do nosso projeto
    async embaralhar() {
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
        this.tela.exibirCarregando()

        const idDoIntervalo = this.tela.iniciarContador()
        // Vamos esperar 3 segundos para atualizar a tela
        await this.util.timeout(3000)
        this.tela.limparContador(idDoIntervalo)
        this.esconderHerois(copias)
        this.tela.exibirCarregando(false)
        
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
        this.heroisEscondidos = heroisOcultos 
    }

    exibirHerois(nomeHeroi) {
        // Vamos procurar esse heroi pelo nome em nossos heroisInciais
        // vamos obter somente a imagem dele
        // Dentro do find eu vou extrair somente o nome para fazer o calculo
        // E eu vou falar que ele vai trazer para mim o heroi que tiver o nome exatamente
        // igual o nome que veio do parametro
        const { img } = this.heroisIniciais.find(({ nome }) => nomeHeroi === nome)
        // Vamos criar uma função na tela, para exibir somente o heroi desejado.
        this.tela.exibirHerois(nomeHeroi, img)
    }
    //Objetivo: Aquela função de quando clicar dentro do card,
    // ela vai ser excutada dentro desse verificarSeleção para ver
    // se foi clicado certo ou errado
    verificarSelecao(id, nome) {
        const item = { id, nome}
        // Vamos verificar a quantidade de herois selecionados
        // e tomar uma açao se escolheu certo ou errado.
        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados) {
            case 0:
                // Se essa foi a primeira seleção do jogador
                // adiciona a ecolha na lista, esperando pela proxima
                // clicada
                // Eu vou guardar o primeiro card, como sendo o primeiro click
                // tem que ter o segundo click.
                this.heroisSelecionados.push(item)
                break;
            case 1: 
                // se a quantidade de escolhidos  for 1, significa
                // que o usuário só pode escolher mais um
                // vamos pegar o primeiro item da lista
                const [ opcao1 ] = this.heroisSelecionados
                // Zerar itens para não selecionar mais de dois
                this.heroisSelecionados = []
                let deveMostrarMensagem = false
                // conferimos se os nomes e ids batem  conforme 
                // o esperado
                // Aqui verificamos se são ids diferentes para o usuário
                // ão clicar duas vezes no mesmo
                // Como padrão true , não precisa passar nada.
                if(opcao1.nome === item.nome && opcao1.id !== id) {
                    deveMostrarMensagem = true 
                    this.exibirHerois(item.nome)
                    this.tela.exibirMensagem(true)
                        // Para execução
                        return;
                    }

                    this.tela.exibirMensagem(false)
                    // Fim do case nesse caso
                    break;
        }
    }

    mostrarHeroisEscondidos() {
        // Vamos pegar todos os herois da tela e colocar seu
        // respectivo valor correto
        const heroisEscondidos = this.heroisEscondidos
        for(const heroi of heroisEscondidos) {
            const { img } = this.heroisIniciais.find(item => item.nome === heroi.nome)
            heroi.img = img
        }
        this.tela.atualizarImagens(heroisEscondidos)
    }
    jogar() {
        this.embaralhar()
    }
    
}