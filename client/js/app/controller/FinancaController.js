import { DateHelper } from '../helpers/DateHelper'
import { Financa } from '../models/Financa'
import { ListaFinancas } from '../models/ListaFinancas'
import { Notificacao } from '../models/Notificacao'
import { NotificacaoView } from '../views/NotificacaoView'
import { FinancasView } from '../views/FinancasView'
import { FinancaService } from '../services/FinancaService'

export class FinancaController {
    constructor() {
        let $ = document.querySelector.bind(document)
        this._inputItem = $("#item")
        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")

        this._listaFinancas = new ListaFinancas()
        this._financasView = new FinancasView($("#financasView"))
        this._financasView.update(this._listaFinancas)

        this._notificacao = new Notificacao()
        this._notificacaoView = new NotificacaoView($("#notificacaoView"))
        this._notificacaoView.update(this._notificacao)
    }

    adiciona(evento) {
        evento.preventDefault()
        this.adicionaFinanca(this._criaFinanca())
        this._financasView.update(this._listaFinancas)
        this._notificacao.texto = "Finança adicionada 2"
        this._notificacaoView.update(this._notificacao)
        this._limpaFormulario()
    }

    _criaFinanca() {
        return new Financa(this._inputItem.value, this._inputData.value, this._inputQuantidade.value, this._inputValor.value)
    }

    _limpaFormulario() {
        this._inputItem.value = ""
        this._inputData.value = ""
        this._inputQuantidade.value = ""
        this._inputValor.value = ""
        // this._inputItem.focus()
    }

    apaga() {
        this._listaFinancas.esvazia()
        this._financasView.update(this._listaFinancas)
    }

    adicionaFinanca(financa) {
        let financaService = new FinancaService()
        financaService.postFinanca(financa)
    }

    importaFinancas() {
        let financaService = new FinancaService()
        financaService.getFinancasSemana()
            .then(
                financas => financas.map(
                    financa => {
                        this._listaFinancas.adiciona(financa)
                        this._financasView.update(this._listaFinancas)
                        this._notificacao.texto = "Finanças da semana importadas"
                        this._notificacaoView.update(this._notificacao)
                    }
                )
            )
            .catch(err => {
                console.error(err)
                return
            })

    }

}