class FinancaController {
    constructor(){
        this.inputItem = document.querySelector("#item")
        this.listaFinancas = new ListaFinancas()
    }

    adiciona(evento){
        evento.preventDefault()
        this.listaFinancas.adiciona(new Financa())
        this.listaFinancas.adiciona(new Financa(this.inputItem.value, "06/04/2020", 1, 200))
        console.log(this.listaFinancas)
    }    

}