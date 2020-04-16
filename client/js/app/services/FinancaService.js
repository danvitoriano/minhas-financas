import { Financa } from '../models/Financa'

export class FinancaService {
    getFinancasSemana() {
        return new Promise(
            (resolve, reject) => {
                fetch('https://evening-badlands-20922.herokuapp.com/financas/anterior')
                    .then(res => res.json())
                    .then(financas => {
                        resolve(
                            financas.map(
                                financa => new Financa(
                                    financa.item,
                                    new Date(financa.data),
                                    financa.quantidade,
                                    financa.valor
                                )
                            )
                        )
                    })
                    .catch(err => {
                        console.error(err)
                        reject("deu ruim")
                    })


            }
        )
    }
}