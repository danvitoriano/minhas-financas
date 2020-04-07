class FinancaController {
    constructor(){
        this.inputItem = document.querySelector("#item")
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")

        this.listaFinancas = new ListaFinancas()
        this.financasView = new FinancasView(document.querySelector("#financasView"))
        this.financasView.update(this.listaFinancas)
    }

    adiciona(evento){
        evento.preventDefault()
        this.listaFinancas.adiciona(this.criaFinanca())
        this.financasView.update(this.listaFinancas)
        this.limpaFormulario()

        this.notificar('Finança adicionada')
    }    

    criaFinanca() { 
        return new Financa(this.inputItem.value, this.inputData.value, this.inputQuantidade.value, this.inputValor.value)
    }

    limpaFormulario() { 
        this.inputItem.value = ""
        this.inputData.value = ""
        this.inputQuantidade.value = ""
        this.inputValor.value = ""
        this.inputItem.focus()
    }

    notificar(mensagem) {
        const elemento = document.createElement('p'); // Cria um novo elemento

        elemento.innerHTML = mensagem;
        elemento.classList.add('alert', 'alert-primary', 'my-3')

        const mensagemContainer = document.querySelector('#alertaFinancaAdicionada')

        mensagemContainer.appendChild(elemento); // Adiciona o elemento no DOM

        setTimeout(() => {
            mensagemContainer.removeChild(elemento); // Elimina da árvore de DOM
        }, 3e3);
    }

}