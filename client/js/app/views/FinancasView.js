import { View } from './View'
import { DateHelper } from '../helpers/DateHelper'

export class FinancasView extends View {
  constructor(elemento, controller) {
    super(elemento)

    this._controller = controller
  }

  template(model) {

    return `<table class="table">
        <thead>
          <tr>
            <th data-col="item" scope="col">Item ${
      (this._controller.coluna === 'item') ?
        this._controller.ordem === 'item' ? '🔻' : '🔺' : ''
      }</th>
            <th data-col="data" scope="col">Data ${
      (this._controller.coluna === 'data') ?
        this._controller.ordem === 'data' ? '🔻' : '🔺' : ''
      }</th>
    <th data-col="quantidade" scope="col"># ${
      (this._controller.coluna === 'quantidade') ?
        this._controller.ordem === 'quantidade' ? '🔻' : '🔺' : ''
      }</th>
    <th data-col="valor" scope="col">$ ${
      (this._controller.coluna === 'valor') ?
        this._controller.ordem === 'valor' ? '🔻' : '🔺' : ''
      }</th>
    <th scope="col">=</th>
          </tr>
        </thead>
  <tbody>
    ${model.financas.map(
        financa => {
          return `<tr>
                    <td>${financa.item}</td>
                    <td>${DateHelper.dataParaTexto(financa.data)}</td>
                    <td>${financa.quantidade}</td>
                    <td>${financa.valor}</td>
                    <td>${financa.total}</td>
                  </tr>`
        }
      ).join("")
      }
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4"></td>
      <td>${model.financas.reduce((acc, financa) => acc + financa.total, 0.0)}</td>
    </tr>
  </tfoot>
      </table> `
  }

  update(modelo) {
    super.update(modelo)

    document.querySelectorAll('[data-col]').forEach(
      col => col.onclick = () => this._controller.ordena(col.dataset.col)
    )
  }

}