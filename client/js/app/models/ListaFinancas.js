class ListaFinancas {
    constructor() {
        this._financas = []
    }

    adiciona(financa) {
        this._financas.push(financa)
    }

    get financas() {
        return [].concat(this._financas)
    }
}