function TransacaoDAO(linhas){
	this._linhas = linhas;
}



TransacaoDAO.prototype.setTransacao = function(){
	this._tipoDeRegistro = this._linhas[i].toString().substring(0,1);
	this._codigoDeInscricao = this._linhas[i].toString().substring(1,3);
	this._numeroDeInscricao = this._linhas[i].toString().substring(3,17);
	this._agencia = this._linhas[i].toString().substring(17,21);
	this._zeros = this._linhas[i].toString().substring(21,23);
	this._conta = this._linhas[i].toString().substring(23,28);
	this._dac = this._linhas[i].toString().substring(28,29);
	this._brancos = this._linhas[i].toString().substring(29,33);
	this._instrucaoAlegacao = this._linhas[i].toString().substring(33,37);
	this._usoDaEmpresa = this._linhas[i].toString().substring(37,62);
	this._nossoNumero = this._linhas[i].toString().substring(62,70);
	this._quantidadeMoeda = this._linhas[i].toString().substring(70,83);
	this._numeroDaCarteira = this._linhas[i].toString().substring(83,86);
	this._usoDoBanco = this._linhas[i].toString().substring(86,107);
	this._carteira = this._linhas[i].toString().substring(107,108);
	this._codigoOcorrenca = this._linhas[i].toString().substring(108,110);
	this._numeroDocumento = this._linhas[i].toString().substring(110,120);
	this._vencimento = this._linhas[i].toString().substring(120,126);
	this._valorTitulo = this._linhas[i].toString().substring(126,139);
	this._codigoBanco = this._linhas[i].toString().substring(139,142);
	this._agenciaCobradora = this._linhas[i].toString().substring(142,147);
	this._especie = this._linhas[i].toString().substring(147,149);
	this._aceite = this._linhas[i].toString().substring(149,150);
	this._dataEmissao = this._linhas[i].toString().substring(150,156);
	this._instrucao1 = this._linhas[i].toString().substring(156,158);
	this._instrucao2 = this._linhas[i].toString().substring(158,160);
	this._juroDia = this._linhas[i].toString().substring(160,173);
	this._dataDesconto = this._linhas[i].toString().substring(173,179);
	this._valorDesconto = this._linhas[i].toString().substring(179,192);
	this._valorIOF = this._linhas[i].toString().substring(192,205);
	this._abatimento = this._linhas[i].toString().substring(205,218);
	this._codigoInscricao = this._linhas[i].toString().substring(218,220);
	this._numeroInscricao = this._linhas[i].toString().substring(220,234);
	this._nome = this._linhas[i].toString().substring(234,264);
	this._brancos2 = this._linhas[i].toString().substring(264,274);
	this._logradouro = this._linhas[i].toString().substring(274,314);
	this._bairro = this._linhas[i].toString().substring(314,326);
	this._cep = this._linhas[i].toString().substring(326,334);
	this._cidade = this._linhas[i].toString().substring(334,349);
	this._estado = this._linhas[i].toString().substring(349,351);
	this._sacadorAvalista = this._linhas[i].toString().substring(351,381);
	this._brancos3 = this._linhas[i].toString().substring(381,385);
	this._dataDeMora = this._linhas[i].toString().substring(385,391);
	this._prazo = this._linhas[i].toString().substring(391,393);
	this._brancos4 = this._linhas[i].toString().substring(393,394);
	this._numeroSequencial = this._linhas[i].toString().substring(394,400);
}

