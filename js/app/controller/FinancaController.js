class FinancaController { 

    constructor() { 
        this.listaFinancas = new ListaFinancas()
    }

    adiciona() { 
        this.listaFinancas.adiciona(new Financa())
    }
}