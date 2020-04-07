class FinancaService{
    getFinancasSemana(){
        return new Promise(
            (resolve, reject) => {
                fetch('http://localhost:3920/financas/anterior')
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