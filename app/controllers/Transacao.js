module.exports.getTransacao = function (app,req,res,linhas) {
	var transacaoDAO = new app.app.models.TransacaoDAO();

	for(var i=1; i<linhas.length; i++){
		if(linhas[i].toString().substring(0,1) != 9){

		}else if(linhas[i].toString().substring(0,1) == 9){
			
		}
	}
	return transacaoDAO;
}