var fs = require('fs');

module.exports.home = function(app,req,res){
	res.render("layout/carregarRemessa");
}

module.exports.carregarArquivo = function(app,req,res){
	var linhas;
	//fs.readFile('./app/files/RM181018.txt', 'UTF8' ,function(err,data){
	fs.readFile(''+req.files.arquivoRemessa.tempFilePath, 'UTF8' ,function(err,data){
		if(err){
			console.error("Not Open: %s",err);
			process.exit(1);
		}
		linhas = data.split(/\r?\n/);
        
		var remessa = [];

		for(var i=0; i<linhas.length; i++){
			var remessaItau400DAO = new app.app.models.RemessaItau400DAO();	
			if(i==0){
				remessaItau400DAO.setHeader(linhas[i]);
			}else if(linhas[i].toString().substring(0,1) != 9){
				remessaItau400DAO.setTransacao(linhas[i]);			
			}else  if(linhas[i].toString().substring(0,1) == 9){
				remessaItau400DAO.setTrailer(linhas[i]);
			}

			remessa.push(remessaItau400DAO);
		}

	res.render("layout/relatorioCopia", {linhas, remessa});
	});
}