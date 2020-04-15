class FinancaController {
    constructor(){
        this.inputItem = document.querySelector("#item")
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")

        this.listaFinancas = new ListaFinancas()
        this.financasView = new FinancasView(document.querySelector("#financasView"))
        this.financasView.update(this.listaFinancas)

        this.notificacao = new Notificacao()
        this.notificacaoView = new NotificacaoView(document.querySelector("#notificacaoView"))
        this.notificacaoView.update(this.notificacao)
    }

    adiciona(evento){
        evento.preventDefault()
        this.listaFinancas.adiciona(this.criaFinanca())
        this.financasView.update(this.listaFinancas)
        this.notificacao.texto = "Finança adicionada 2"
        this.notificacaoView.update(this.notificacao)
        this.limpaFormulario()
    }    

    criaFinanca() { 
        console.log(DateHelper.textoParaData(this.inputData.value))
        return new Financa(this.inputItem.value, DateHelper.textoParaData(this.inputData.value), this.inputQuantidade.value, this.inputValor.value)
    }

    limpaFormulario() { 
        this.inputItem.value = ""
        this.inputData.value = ""
        this.inputQuantidade.value = ""
        this.inputValor.value = ""
        // this.inputItem.focus()
    }

    importaFinancas() {
        let financaService = new FinancaService()
        financaService.getFinancasSemana()
            .then(
                financas => financas.map(
                    financa => {
                        this.listaFinancas.adiciona(financa)
                        this.financasView.update(this.listaFinancas)
                        this.notificacao.texto = "Finanças da semana importadas"
                        this.notificacaoView.update(this.notificacao)
                    }
                )
            )
            .catch(err => {
                console.error(err)
                return
            })
            
    }

}