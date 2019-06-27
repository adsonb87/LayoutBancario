var fs = require('fs');

module.exports.remessa = function (app,req,res) {
	var linhas;

	fs.readFile('./RM181018.txt', 'UTF8' ,function(err,data){
		if(err){
			console.error("Not Open: %s",err);
			process.exit(1);
		}
		linhas = data.split(/\r?\n/);
		
        var headerDAO = app.app.controllers.Header.getHeader(app,req,res,linhas);
        var transacaoDAO = app.app.controllers.Transacao.getTransacao(app,req,res,linhas);
    	var trailerDAO = app.app.controllers.Trailer.getTrailer(app,req,res,linhas);

		res.render("layout/relatorio", {linhas, headerDAO, transacaoDAO, trailerDAO});
	});
}