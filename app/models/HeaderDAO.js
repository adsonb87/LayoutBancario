function HeaderDAO(linhas){
	this._linhas = linhas;
}


HeaderDAO.prototype.setHeader = function(){
	this._tipoDeRegistro = this._linhas[0].toString().substring(0,1);
	this._operacao = this._linhas[0].toString().substring(1,2);
	this._literalDeRemessa = this._linhas[0].toString().substring(2,9);
	this._codigoDeServico = this._linhas[0].toString().substring(9,11);
	this._literalDeServico = this._linhas[0].toString().substring(11,26);
	this._agencia = this._linhas[0].toString().substring(26,30);
	this._zeros = this._linhas[0].toString().substring(30,32);
	this._conta = this._linhas[0].toString().substring(32,37);
	this._dac = this._linhas[0].toString().substring(37,38);
	this._brancos = this._linhas[0].toString().substring(38,46);
	this._nomeDaEmpresa = this._linhas[0].toString().substring(46,76);
	this._codigoDoBanco = this._linhas[0].toString().substring(76,79);
	this._nomeDoBanco = this._linhas[0].toString().substring(79,94);
	this._dataDeGeracao = this._linhas[0].toString().substring(94,100);
	this._brancos2 = this._linhas[0].toString().substring(100,394);
	this._numeroSequencial = this._linhas[0].toString().substring(394,400);
}

