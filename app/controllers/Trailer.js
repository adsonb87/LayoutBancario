module.exports.getTrailer = function(app,req,res,linhas){
    var trailerDAO = new app.app.models.TrailerDAO();

	trailerDAO.setTipoDeRegistro(linhas[2]);
	trailerDAO.setBrancos(linhas[2]);
    trailerDAO.setNumeroSequencial(linhas[2]);
    
    return trailerDAO;
}