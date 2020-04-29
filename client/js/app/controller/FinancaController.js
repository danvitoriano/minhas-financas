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
        this._financasView = new FinancasView($("#financasView"), this)
        this._financasView.update(this._listaFinancas)

        this._notificacao = new Notificacao()
        this._notificacaoView = new NotificacaoView($("#notificacaoView"))
        this._notificacaoView.update(this._notificacao)

        this._ordemColuna = ""
        this._ordemAtual = ""
    }

    get coluna() {
        return this._ordemColuna
    }

    get ordem() {
        return this._ordemAtual
    }

    adiciona(evento) {
        evento.preventDefault()
        this._listaFinancas.adiciona(this._criaFinanca())
        this.postaFinanca(this._postaFinanca())
        this._financasView.update(this._listaFinancas)
        this._notificacao.texto = "Finança adicionada 2"
        this._notificacaoView.update(this._notificacao)
        this._limpaFormulario()
    }

    _criaFinanca() {
        return new Financa(this._inputItem.value, DateHelper.textoParaData(this._inputData.value), this._inputQuantidade.value, this._inputValor.value)
    }

    _limpaFormulario() {
        this._inputItem.value = ""
        this._inputData.value = ""
        this._inputQuantidade.value = ""
        this._inputValor.value = ""
        // this._inputItem.focus()
    }

    _postaFinanca() {
        return {
            item: this._inputItem.value,
            data: this._inputData.value,
            quantidade: this._inputQuantidade.value,
            valor: this._inputValor.value
        }
    }

    apaga() {
        this._listaFinancas.esvazia()
        this._financasView.update(this._listaFinancas)
    }

    postaFinanca(financa) {
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

    ordena(coluna) {
        if (coluna === 'item')
            this._listaFinancas.ordena((a, b) => a[coluna].localeCompare(b[coluna]))
        else
            this._listaFinancas.ordena((a, b) => a[coluna] - b[coluna])

        if (coluna === this._ordemAtual) {
            this._listaFinancas.reverse()

            this._ordemAtual = ""
        } else {
            this._ordemAtual = coluna
        }

        this._ordemColuna = coluna

        this._financasView.update(this._listaFinancas)
    }

}