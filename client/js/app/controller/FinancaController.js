import { DateHelper } from '../helpers/DateHelper'
import { Financa } from '../models/Financa'
import { ListaFinancas } from '../models/ListaFinancas'
import { Notificacao } from '../models/Notificacao'
import { NotificacaoView } from '../views/NotificacaoView'
import { FinancasView } from '../views/FinancasView'
import { FinancaService } from '../services/FinancaService'
import { Bind } from '../helpers/Bind'

export class FinancaController {
    constructor() {
        let $ = document.querySelector.bind(document)
        this._inputItem = $("#item")
        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")

        this._financasView = new FinancasView($("#financasView"), this)
        // Make initial empty list
        this._financasView.update(new ListaFinancas())

        this._listaFinancas = new Bind(
            new ListaFinancas(),
            this._financasView,
            "adiciona",
            "esvazia"
        );

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
        this._notificacao.texto = "Finança adicionada"
        this._notificacaoView.update(this._notificacao)
        this._limpaFormulario()
    }

    _criaFinanca() {
        console.log(DateHelper.textoParaData(this._inputData.value))
        return new Financa(this._inputItem.value, DateHelper.textoParaData(this._inputData.value), this._inputQuantidade.value, this._inputValor.value)
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

    importaFinancas() {
        let financaService = new FinancaService()
        financaService.getFinancasSemana()
            .then(
                financas => financas.map(
                    financa => {
                        this._listaFinancas.adiciona(financa)
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

    }

}