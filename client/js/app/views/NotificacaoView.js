import { View } from './View'

export class NotificacaoView extends View {
    constructor(elemento) {
        super(elemento)
    }

    template(model) {

        return model.texto ? `<p class="alert alert-primary my-3">${model.texto}</p>` : `<p></p>`
    }

}