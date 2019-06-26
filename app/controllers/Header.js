module.exports.getHeader = function (app,req,res,linhas) {
	var headerDao = new app.app.models.HeaderDAO();

	headerDAO.setTipoDeRegistro(linhas[0]);
	headerDAO.setOperacao(linhas[0]);
	headerDAO.setLiteralDeRemessa(linhas[0]);
	headerDAO.setCodigoDeServico(linhas[0]);
	headerDAO.setLiteralDeServico(linhas[0]);
	headerDAO.setAgencia(linhas[0]);			
	headerDAO.setZeros(linhas[0]);		
	headerDAO.setConta(linhas[0]);			
	headerDAO.setDac(linhas[0]);	    
	headerDAO.setBrancos(linhas[0]);
	headerDAO.setNomeDaEmpresa(linhas[0]);
	headerDAO.setCodigoDoBanco(linhas[0]);	
	headerDAO.setNomeDoBanco(linhas[0]);
	headerDAO.setDataDeGeracao(linhas[0]);
	headerDAO.setBrancos2(linhas[0]);
	headerDAO.setNumeroSequencial(linhas[0]);	

    return headerDao;
}