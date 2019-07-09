var fs = require('fs');

module.exports.home = function(app,req,res){
	res.render("layout/carregarRemessa");
}

module.exports.carregarArquivo = function(app,req,res){
	var linhas;

	fs.readFile(''+req.files.arquivoRemessa.tempFilePath, 'UTF8' ,function(err,data){
		if(err){
			console.error("Not Open: %s",err);
			process.exit(1);
		}
		linhas = data.split(/\r?\n/);
        
        var remessaItau400DAO = app.app.models.RemessaItau400DAO();
        
        




		res.render("layout/relatorio", {linhas, remessaItau400DAO});
	});

}