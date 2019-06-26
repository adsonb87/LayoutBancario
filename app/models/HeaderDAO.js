function HeaderDAO(){

}

var tipoDeRegistro;
var operacao;
var literalDeRemessa = this._linhas[0].toString().substring(2,9);
var codigoDeServico = this._linhas[0].toString().substring(9,11);
var literalDeServico = this._linhas[0].toString().substring(11,26);
var agencia = this._linhas[0].toString().substring(26,30);
var zeros = this._linhas[0].toString().substring(30,32);
var conta = this._linhas[0].toString().substring(32,37);
var dac = this._linhas[0].toString().substring(37,38);
var brancos = this._linhas[0].toString().substring(38,46);
var nomeDaEmpresa = this._linhas[0].toString().substring(46,76);
var codigoDoBanco = this._linhas[0].toString().substring(76,79);
var nomeDoBanco = this._linhas[0].toString().substring(79,94);
var dataDeGeracao = this._linhas[0].toString().substring(94,100);
var brancos2 = this._linhas[0].toString().substring(100,394);
var numeroSequencial = this._linhas[0].toString().substring(394,400);

HeaderDAO.prototype.setTipoDeRegistro = function(linhas){
	this.tipoDeRegistro = linhas.toString().substring(0,1);
}

HeaderDAO.prototype.getTipoDeRegistro = function(){
	return this.tipoDeRegistro
}

HeaderDAO.prototype.setOperacao = function(linhas){
	this.operacao = linhas.toString().substring(1,2);
}

HeaderDAO.prototype.getOperacao = function(){
	return this.operacao;
}




module.exports = function(){
	return HeaderDAO;
}

