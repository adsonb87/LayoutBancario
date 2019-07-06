
var tipoDeRegistroHeader;
var operacao;
var literalDeRemessa;
var codigoDeServico;
var literalDeServico;
var agencia;			
var zeros;		
var conta;			
var dac;	    
var brancos;
var nomeDaEmpresa;
var codigoDoBanco;	
var nomeDoBanco;
var dataDeGeracao;
var brancos2;
var numeroSequencial;

RemessaItau400DAO.prototype.settipoDeRegistroHeader = function(linhas){
	this.tipoDeRegistroHeader = linhas.toString().substring(0,1);
}

RemessaItau400DAO.prototype.gettipoDeRegistroHeader = function(){
	return this.tipoDeRegistroHeader;
}

RemessaItau400DAO.prototype.setOperacao = function(linhas){
	this.operacao = linhas.toString().substring(1,2);
}

RemessaItau400DAO.prototype.getOperacao = function(){
	return this.operacao;
}

RemessaItau400DAO.prototype.setLiteralDeRemessa = function(linhas){
	this.literalDeRemessa = linhas.toString().substring(2,9);
}

RemessaItau400DAO.prototype.getLiteralDeRemessa = function(){
	return this.literalDeRemessa;
}

RemessaItau400DAO.prototype.setCodigoDeServico = function(linhas){
	this.codigoDeServico = linhas.toString().substring(9,11);
}

RemessaItau400DAO.prototype.getCodigoDeServico = function(){
	return this.codigoDeServico;
}

RemessaItau400DAO.prototype.setLiteralDeServico = function(linhas){
	this.literalDeServico = linhas.toString().substring(11,26);
}

RemessaItau400DAO.prototype.getLiteralDeServico = function(){
	return this.literalDeServico;
}

RemessaItau400DAO.prototype.setAgencia = function(linhas){
	this.agencia = linhas.toString().substring(26,30);
}

RemessaItau400DAO.prototype.getAgencia = function(){
	return this.agencia;
}

RemessaItau400DAO.prototype.setZeros = function(linhas){
	this.zeros = linhas.toString().substring(30,32);
}

RemessaItau400DAO.prototype.getZeros = function(){
	return this.zeros;
}

RemessaItau400DAO.prototype.setConta = function(linhas){
	this.conta = linhas.toString().substring(32,37);
}

RemessaItau400DAO.prototype.getConta = function(){
	return this.conta;
}

RemessaItau400DAO.prototype.setDac = function(linhas){
	this.dac = linhas.toString().substring(37,38);
}

RemessaItau400DAO.prototype.getDac = function(){
	return this.dac;
}

RemessaItau400DAO.prototype.setBrancos = function(linhas){
	this.brancos = linhas.toString().substring(38,46);
}

RemessaItau400DAO.prototype.getBrancos = function(){
	return this.brancos;
}

RemessaItau400DAO.prototype.setNomeDaEmpresa = function(linhas){
	this.nomeDaEmpresa = linhas.toString().substring(46,76);
}

RemessaItau400DAO.prototype.getNomeDaEmpresa = function(){
	return this.nomeDaEmpresa;
}

RemessaItau400DAO.prototype.setCodigoDoBanco = function(linhas){
	this.codigoDoBanco = linhas.toString().substring(76,79);
}

RemessaItau400DAO.prototype.getCodigoDoBanco = function(){
	return this.codigoDoBanco;
}

RemessaItau400DAO.prototype.setNomeDoBanco = function(linhas){
	this.nomeDoBanco = linhas.toString().substring(79,94);
}

RemessaItau400DAO.prototype.getNomeDoBanco = function(){
	return this.nomeDoBanco;
}

RemessaItau400DAO.prototype.setDataDeGeracao = function(linhas){
	this.dataDeGeracao = linhas.toString().substring(94,100);
}

RemessaItau400DAO.prototype.getDataDeGeracao = function(){
	return this.dataDeGeracao;
}

RemessaItau400DAO.prototype.setBrancos2 = function(linhas){
	this.brancos2 = linhas.toString().substring(100,394);
}

RemessaItau400DAO.prototype.getBrancos2 = function(){
	return this.brancos2;
}

RemessaItau400DAO.prototype.setNumeroSequencial = function(linhas){
	this.numeroSequencial = linhas.toString().substring(394,400);
}

RemessaItau400DAO.prototype.getNumeroSequencial = function(){
	return this.numeroSequencial;
}


