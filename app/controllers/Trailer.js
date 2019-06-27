module.exports.getTrailer = function(app,req,res,linhas){
    
    var trailerDAO = new app.app.models.TrailerDAO();
    
    for(var i=0; i<linhas.length; i++){
        if(linhas[i].toString().substring(0,1) == 9){
			trailerDAO.setTipoDeRegistro(linhas[i]);
			trailerDAO.setBrancos(linhas[i]);
	    	trailerDAO.setNumeroSequencial(linhas[i]);		
		}
    }
    
    return trailerDAO;
}