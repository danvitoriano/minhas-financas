import { Financa } from '../models/Financa'
import { HttpService } from '../services/HttpService'

export class FinancaService {
    getFinancasSemana() {
        const httpService = new HttpService()
        return httpService.get('http://localhost:9000/financas/anterior')
            .then(financas => financas.map(
                    ({item, data, quantidade, valor}) => new Financa(
                        item,
                        new Date(data),
                        quantidade,
                        valor,
                    )
                )
            )
            .catch(err => console.error(err))
    }

    postFinanca(financa) {
        const httpService = new HttpService()
        return httpService.post('http://localhost:9000/financas', financa)
            .then((res) => {
                console.log(res);
            })
            .catch(err => console.error(err))
    }
}