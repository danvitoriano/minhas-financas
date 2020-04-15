var api = require('../api');

module.exports  = function(app) {
    
    app.route('/financas/semana')
        .get(api.listaSemana);
        
    app.route('/financas/anterior')
        .get(api.listaAnterior);
        
    app.route('/financas/retrasada')
        .get(api.listaRetrasada);  
        
    app.route('/financas')
        .post(api.cadastraFinanca);          
};