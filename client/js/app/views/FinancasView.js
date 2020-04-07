class FinancasView { 
    constructor(elemento) { 
        this.elemento = elemento
    }

    template(model) { 

        return `<table class="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Data</th>
            <th scope="col">#</th>
            <th scope="col">$</th>
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
                    <td>x</td>
                  </tr>`
                 }
            ).join("")
        }
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4"></td>
            <td >6</td>
          </tr>
        </tfoot>
      </table>`
    }

    update(modelo) { 
       this.elemento.innerHTML = this.template(modelo)
    }
}