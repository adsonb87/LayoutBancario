var fs = require('fs');

module.exports.remessa = function (app,req,res) {
	var linhas;

	fs.readFile('./RM181018.txt', 'UTF8' ,function(err,data){
		if(err){
			console.error("Not Open: %s",err);
			process.exit(1);
		}
		linhas = data.split(/\r?\n/);
		
		var trailerDAO = new app.app.models.TrailerDAO();

		trailerDAO.setTipoDeRegistro(linhas[2]);
		trailerDAO.setBrancos(linhas[2]);
		trailerDAO.setNumeroSequencial(linhas[2]);
		
		res.render("layout/relatorio", {linhas, trailerDAO});
	});
}