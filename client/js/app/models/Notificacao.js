export class Notificacao {
    constructor(texto = '', tipo = '') {
        this._texto = texto
        this._tipo = tipo
    }

    get texto() {
        return this._texto
    }

    set texto(texto) {
        this._texto = texto
    }

    get tipo() {
        return this._tipo
    }

    set tipo(tipo) {
        this._tipo = tipo
    }
}