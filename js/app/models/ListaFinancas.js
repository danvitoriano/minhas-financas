class ListaFinancas {
    constructor(){
        this.financas = []
    }

    adiciona(financa){
        this.financas.push(financa)
    }

    getFinancas(){
        return this.financas
    }
}