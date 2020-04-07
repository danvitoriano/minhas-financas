class FinancasView {
    constructor(elemento){
        this.elemento = elemento
    }

    template(model){
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
             f => `
                <tr>
                    <td>${f.item}</td>
                    <td>18/2/2020</td>
                    <td>2</td>
                    <td>2.5</td>
                    <td>5</td>
                </tr>
             `

         ).join('')
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

    update(model){
        this.elemento.innerHTML = this.template(model)
    }
}