export class Financa {

    constructor(item, data, quantidade, valor) {
        this._item = item
        this._data = new Date(data.getTime())
        this._quantidade = quantidade
        this._valor = valor
        Object.freeze(this)
    }

    get item() {
        return this._item
    }

    get data() {
        return new Date(this._data.getTime())
    }

    get quantidade() {
        return this._quantidade
    }

    get valor() {
        return this._valor
    }

    get total() {
        return this._quantidade * this._valor
    }




}