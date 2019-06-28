module.exports = function (app) {

	app.get('/layout',function(req,res){
		app.app.controllers.Remessa.remessa(app,req,res);
	});

	app.get('/index',function(req,res){
		app.app.controllers.Remessa.home(app,req,res);
	});

	app.post('/carregarArquivo',function(req,res){
		app.app.controllers.Remessa.carregarArquivo(app,req,res);
	});
};																																																																																																																																																																											