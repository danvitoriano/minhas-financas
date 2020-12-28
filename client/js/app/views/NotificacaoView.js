import { View } from './View'

export class NotificacaoView extends View {
    constructor(elemento) {
        super(elemento)
    }

    template(model, tipo) {

        return model.texto ? `<p class="alert alert-${tipo} my-3">${model.texto}</p>` : `<p></p>`
    }
}