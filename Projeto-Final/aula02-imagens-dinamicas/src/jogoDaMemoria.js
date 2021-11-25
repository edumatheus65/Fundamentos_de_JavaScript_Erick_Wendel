class JogoDaMemoria{
    // se mandar um obj = { tela:1, idade:2, etc: 3}
    // vai ignorar todo resto das propriedades e pegar somente a prioridade
    // tela
    constructor({ tela }) {
        this.tela = tela
        
        this.heroisIniciais = [
            { img: './img/flash.png', nome: 'flash'},
            { img: './img/cyclop.png', nome: 'cyclop'},
            { img: './img/hellboy.png', nome: 'hellboy'},
            { img: './img/mulhermaravilha.png', nome: 'mulhermaravilha'},
            { img: './img/spyder.png', nome: 'spyder'},

        ]
    }
// 1o -para usar o this, nao podemos usar o static
inicializar() {
    // 2o - vamos precisar importar a tela para fazer alterações nela
    // 3o - chamar a funcao de tela apara atualizar as imagens
    this.tela.atualizarImagens(this.heroisIniciais)
    }

}