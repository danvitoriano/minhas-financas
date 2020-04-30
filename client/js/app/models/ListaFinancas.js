export class ListaFinancas {
    constructor() {
    this.connection;
    this.indexedDb = "DB";
    this.openRequest = window.indexedDB.open(this.indexedDb, 1);


    this.openRequest.onupgradeneeded = (e) => {
        let minhaConnection = e.target.result;
        if (minhaConnection.objectStoreNames.contains(this.indexedDb)) {
          minhaConnection.deleteObjectStore(this.indexedDb);
        }
        minhaConnection.createObjectStore(this.indexedDb, {
          autoIncrement: true,
        });
      };
      this.openRequest.onsuccess = (e) => {
        this.connection = e.target.result;
      };
      this.openRequest.onerror = (e) => {
        console.log(e.target.error);
        // faça algo com o erro
      };
        this._financas = []
    }

    adiciona(financa) {
      
       let transaction = this.connection.transaction([this.indexedDb], "readwrite")
        let store = transaction.objectStore(this.indexedDb)
        var request = store.add(financa)
        
        this._financas.push(financa)
        console.log(financa)
      
    }

    esvazia() {
        this._financas = [];
    }

    get financas() {
        return [].concat(this._financas)
    }
}