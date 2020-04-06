class FinancasView { 
    constructor(elemento) { 
        this.elemento = elemento
    }

    template() { 
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
          <tr>
            <td>Lanche</td>
            <td>21/2/2020</td>
            <td>1</td>
            <td>1.00</td>
            <td>1</td>
  
  
          </tr>
          <tr>
            <td>Jogo</td>
            <td>18/2/2020</td>
            <td>2</td>
            <td>2.5</td>
            <td>5</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4"></td>
            <td >6</td>
          </tr>
        </tfoot>
      </table>`
    }

    update() { 
       this.elemento.innerHTML = this.template()
    }
}