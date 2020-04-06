class FinancaController {
    constructor(){
        this.listaFinancas = new ListaFinancas()
    }

    adiciona(){
        this.listaFinancas.adiciona(new Financa())
        this.listaFinancas.adiciona(new Financa("cinema", "06/04/2020", 1, 200))
        console.log(this.listaFinancas)
    }    

}