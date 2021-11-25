const ID_CONTEUDO = "conteudo"
class Tela {
    static obterCodigoHtml(item) {
       return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;">
                <img name="${item.nome}" src="${item.img}" class="card-img-top" alt="..." />
            </div>
            <br />
        </div> 
        `
    }
        static alterarConteudoHTML(codigoHtml) {
            const conteudo = document.getElementById(ID_CONTEUDO)
            conteudo.innerHTML = codigoHtml
        }
    static gerarStringHTMLPelaImagem(itens) {
        // Para casa item das lista vai excutar a função obterCodigoHtml
        // ao final, vai concatenar tudo numa única string
        // Muda de array para string
        return itens.map(Tela.obterCodigoHtml).join('')
    }
    static atualizarImagens(itens) {
        const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
        Tela.alterarConteudoHTML(codigoHtml)
    }
}