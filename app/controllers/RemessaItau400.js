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
        
        var remessaItau400DAO = new app.app.models.RemessaItau400DAO();	
		var remessa = [];

		for(var i=0; i<linhas.length; i++){
			if(i==0){
				
			}else if(linhas[i].toString().substring(0,1) != 9){

			}else  if(linhas[i].toString().substring(0,1) == 9){
			
			}
		}

	res.render("layout/relatorio", {linhas, remessaItau400DAO});
	});
}