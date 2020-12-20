export class ListaFinancas {
    constructor() {
        this._financas = []
    }

    adiciona(financa) {
        this._financas.push(financa)
    }

    esvazia() {
        this._financas = []
    }

    ordena(criterio) {
        this._financas.sort(criterio)
    }

    reverse() {
        this._financas.reverse()
    }

    filtra(dataFiltrada) {
        return this._financas.filter(financa => financa._data.setHours(0,0,0,0).valueOF() === dataFiltrada.valueOf())
    } 

    get financas() {
        return [].concat(this._financas)
    }
}