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
                    <td>${f.data}</td>
                    <td>${f.quantidade}</td>
                    <td>${f.valor}</td>
                    <td>${f.quantidade * f.valor}</td>
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