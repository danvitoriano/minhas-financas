import { Financa } from '../models/Financa'
import { HttpService } from '../services/HttpService'

export class FinancaService {
    getFinancasSemana() {
        let httpService = new HttpService()
        return httpService.get('http://localhost:9000/financas/anterior')
            .then(financas => financas.map(
                    financa => new Financa(
                        financa.item,
                        new Date(financa.data),
                        financa.quantidade,
                        financa.valor,
                    )
                )
            )
            .catch(err => console.error(err))
    }

    postFinanca(financa) {
        let httpService = new HttpService()
        return httpService.post('http://localhost:9000/financas/anterior', financa)
            .then()
            .catch(err => console.error(err))
    }
}