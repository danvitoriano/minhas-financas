import { FinancaController } from './controller/FinancaController'

let financaController = new FinancaController();

document.querySelector('form').onsubmit = financaController.adiciona.bind(financaController)
document.querySelector('#btn-import').onclick = financaController.importaFinancas.bind(financaController)
document.querySelector('#btn-apaga').onclick = financaController.apaga.bind(financaController)
// ATIVIDADE 2
document.querySelector('#btn-filtro').onclick = financaController.filtra.bind(financaController)
// ATIVIDADE 5b
document.querySelector('#btn-limpar').onclick = financaController.limpar.bind(financaController)