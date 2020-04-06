class ListaFinancas { 
    constructor() { 
        this.financas = []
    }

    adiciona(financa) {
        this.financas.push(financa)
    }

    get financas() { 
        return this.financas
    }
}