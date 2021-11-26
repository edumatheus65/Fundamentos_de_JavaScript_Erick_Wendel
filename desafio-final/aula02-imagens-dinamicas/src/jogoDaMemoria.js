class JogoDaMemoria {
    
    
    constructor({ tela }) {
        this.tela = tela

        this.heroisIniciais = [
            { img: './img/flash.png', nome: 'flash'},
            { img: './img/cyclop.png', nome: 'cyclop'},
            { img: './img/hellboy.png', nome: 'hellboy'},
            { img: './img/mulhermaravilha.png', nome: 'mulhermaravilha'},            

        ]
        
    }

    inicializar() {
        this.tela.atualizarImagens(this.heroisIniciais)
        // quando essa função executar, vai ignorar o this de window 
        // ela vai usar o this dessa tela
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }

    embaralhar() {
        const copias = this.heroisIniciais

        // duplicar os itens
        .concat(this.heroisIniciais)
        // entrar em cada um dos itens e gerar um id para cada
        .map((item) => {
            return Object.assign({}, item, { id: (Math.random() / 0.5 )})
        })
        // // ordenar
        .sort(() => Math.random() - 0.5 )

        this.tela.atualizarImagens(copias)
    }

    jogar() {
        this.embaralhar()
    }

}