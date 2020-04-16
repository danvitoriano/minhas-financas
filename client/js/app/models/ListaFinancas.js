export class ListaFinancas {
    constructor() {
        this._financas = []
    }

    adiciona(financa) {
        this._financas.push(financa)
    }

    esvazia() {
        this._financas = [];
    }

    get financas() {
        return [].concat(this._financas)
    }
}