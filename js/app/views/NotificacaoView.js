class NotificacaoView { 
    constructor(elemento) { 
        this.elemento = elemento
    }

    template(model) { 

        return model.texto ? `<p class="alert alert-primary my-3">${model.texto}</p>` : `<p></p>`
    }

    update(modelo) { 
       this.elemento.innerHTML = this.template(modelo)
    }
}