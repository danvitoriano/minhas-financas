export class View {
    constructor(elemento) {
        this._elemento = elemento
    }

    template() {
        throw new Error('O método template deve ser implementado')
    }

    update(modelo, tipo = 'primary') {

        this._elemento.innerHTML = this.template(modelo, tipo)
    }
}