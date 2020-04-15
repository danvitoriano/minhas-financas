var api = {}

var dataAtual = new Date();
var dataAnterior = new Date();
dataAnterior.setDate(dataAtual.getDate() - 7);
var dateRetrasada = new Date();
dateRetrasada.setDate(dataAtual.getDate() - 14);

var financas = [
      { item: 'despesa-atual-1', data : dataAtual, quantidade : 1, valor : 150},
      { item: 'despesa-atual-2', data : dataAtual, quantidade : 2, valor : 250},
      { item: 'despesa-atual-3', data : dataAtual, quantidade : 3, valor : 350},
      { item: 'despesa-anterior-1', data : dataAnterior, quantidade : 1, valor : 450},
      { item: 'despesa-anterior-2', data : dataAnterior, quantidade : 2, valor : 550},
      { item: 'despesa-anterior-3', data : dataAnterior, quantidade : 3, valor : 650},
      { item: 'despesa-retrasda-1', data : dateRetrasada, quantidade : 1, valor : 750},
      { item: 'despesa-retrasda-2', data : dateRetrasada, quantidade : 2, valor : 950},
      { item: 'despesa-retrasda-3', data : dateRetrasada, quantidade : 3, valor : 950}
    ];


api.listaSemana = function(req, res) {
    var financasAtuais = financas.filter(function(financa) {
        return financa.data > dataAnterior;
    });
    res.json(financasAtuais);
};

api.listaAnterior = function(req, res) {
   
   var financasAnteriores = financas.filter(function(financa) {
        return financa.data < dataAtual && financa.data > dateRetrasada;
    });
	setTimeout(function() {
		res.json(financasAnteriores);	
	}, 1000);
    
};

api.listaRetrasada = function(req, res) {

   var financasRtrasadas = financas.filter(function(financa) {
        return financa.data < dataAnterior;
    });
    res.json(financasRtrasadas);
    
};

api.cadastraFinanca = function(req, res) {

   console.log(req.body);
   req.body.data = new Date(req.body.data.replace(/-/g,'/'));
   financas.push(req.body);
   res.status(200).json("Finança recebida");
};



module.exports = api;