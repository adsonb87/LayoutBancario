module.exports = function (app) {

	app.get('/layout',function(req,res){
		app.app.controllers.Remessa.remessa(app,req,res);
	});
};