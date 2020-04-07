class FinancaController {
    constructor(){
        this.inputItem = document.querySelector("#item")
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
        this.listaFinancas = new ListaFinancas()
        this.financasView = new FinancasView(document.querySelector("#financasView"))
        this.financasView.update(this.listaFinancas)
    }

    adiciona(evento){
        evento.preventDefault()
        this.listaFinancas.adiciona(this.criaFinanca())
        this.financasView.update(this.listaFinancas)
        this.limpaFormulario()
    }    

        criaFinanca(){
            return new Financa(this.inputItem.value,this.inputData.value, this.inputQuantidade.value, this.inputValor.value)
    }

    limpaFormulario(){
        this.inputItem.value = ''
        // this.inputItem.focus()

    }

}