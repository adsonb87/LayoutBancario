module.exports = function (app) {

	app.get('/layout',function(req,res){
		app.app.controllers.Trailer.remessa(app,req,res);
	});
};