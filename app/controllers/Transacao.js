module.exports.getTransacao = function (app,req,res,linhas) {
	var transacaoDAO = new app.app.models.TransacaoDAO();
	var transacoes = [];

	for(var i=1; i<linhas.length; i++){
		if(linhas[i].toString().substring(0,1) != 9){
			transacaoDAO.setTipoDeRegistro(linhas[i]);
			transacaoDAO.setCodigoDeInscricao(linhas[i]);
			transacaoDAO.setNumeroDeInscricao(linhas[i]);	
			transacaoDAO.setAgencia(linhas[i]);
			transacaoDAO.setZeros(linhas[i]);
			transacaoDAO.setConta(linhas[i]);
			transacaoDAO.setDac(linhas[i]);
			transacaoDAO.setBrancos(linhas[i]);
			transacaoDAO.setInstrucaoAlegacao(linhas[i]);
			transacaoDAO.setUsoDaEmpresa(linhas[i]);
			transacaoDAO.setNossoNumero(linhas[i]);
			transacaoDAO.setQuantidadeMoeda(linhas[i]);
			transacaoDAO.setNumeroDaCarteira(linhas[i]);
			transacaoDAO.setUsoDoBanco(linhas[i]);
			transacaoDAO.setCarteira(linhas[i]);
			transacaoDAO.setCodigoOcorrenca(linhas[i]);
			transacaoDAO.setNumeroDocumento(linhas[i]);
			transacaoDAO.setVencimento(linhas[i]);
			transacaoDAO.setValorTitulo(linhas[i]);
			transacaoDAO.setCodigoBanco(linhas[i]);
			transacaoDAO.setAgenciaCobradora(linhas[i]);
			transacaoDAO.setEspecie(linhas[i]);
			transacaoDAO.setAceite(linhas[i]);
			transacaoDAO.setDataEmissao(linhas[i]);
			transacaoDAO.setInstrucao1(linhas[i]);
			transacaoDAO.setInstrucao2(linhas[i]);
			transacaoDAO.setJuroDia(linhas[i]);
			transacaoDAO.setDataDesconto(linhas[i]);
			transacaoDAO.setValorDesconto(linhas[i]);
			transacaoDAO.setValorIOF(linhas[i]);
			transacaoDAO.setAbatimento(linhas[i]);
			transacaoDAO.setCodigoInscricao(linhas[i]);
			transacaoDAO.setNumeroInscricao(linhas[i]);
			transacaoDAO.setNome(linhas[i]);
			transacaoDAO.setBrancos2(linhas[i]);
			transacaoDAO.setLogradouro(linhas[i]);
			transacaoDAO.setBairro(linhas[i]);
			transacaoDAO.setCep(linhas[i]);
			transacaoDAO.setCidade(linhas[i]);
			transacaoDAO.setEstado(linhas[i]);
			transacaoDAO.setSacadorAvalista(linhas[i]);
			transacaoDAO.setBrancos3(linhas[i]);
			transacaoDAO.setDataDeMora(linhas[i]);
			transacaoDAO.setPrazo(linhas[i]);
			transacaoDAO.setBrancos4(linhas[i]);
			transacaoDAO.setNumeroSequencial(linhas[i]);

			console.log(transacaoDAO.getNome());

			transacoes.push(transacaoDAO); //Adiciona a transação ao final do Array

		}else if(linhas[i].toString().substring(0,1) == 9){
			
		}
	}

	for(var i=0; i<transacoes.length; i++){
		console.log(transacoes[10].getNome());
	}

	return transacaoDAO;
}