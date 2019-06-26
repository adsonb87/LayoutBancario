function HeaderDAO(){

}

var tipoDeRegistro;
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

HeaderDAO.prototype.setTipoDeRegistro = function(linhas){
	this.tipoDeRegistro = linhas.toString().substring(0,1);
}

HeaderDAO.prototype.getTipoDeRegistro = function(){
	return this.tipoDeRegistro;
}

HeaderDAO.prototype.setOperacao = function(linhas){
	this.operacao = linhas.toString().substring(1,2);
}

HeaderDAO.prototype.getOperacao = function(){
	return this.operacao;
}

HeaderDAO.prototype.setLiteralDeRemessa = function(linhas){
	this.literalDeRemessa = linhas.toString().substring(2,9);
}

HeaderDAO.prototype.getLiteralDeRemessa = function(){
	return this.literalDeRemessa;
}

HeaderDAO.prototype.setCodigoDeServico = function(linhas){
	this.codigoDeServico = linhas.toString().substring(9,11);
}

HeaderDAO.prototype.getCodigoDeServico = function(){
	return this.codigoDeServico;
}

HeaderDAO.prototype.setLiteralDeServico = function(linhas){
	this.literalDeServico = linhas.toString().substring(11,26);
}

HeaderDAO.prototype.getLiteralDeServico = function(){
	return literalDeServico;
}

HeaderDAO.prototype.setAgencia = function(linhas){
	this.agencia = linhas.toString().substring(26,30);
}

HeaderDAO.prototype.getAgencia = function(){
	return this.agencia;
}

HeaderDAO.prototype.setZeros = function(linhas){
	this.zeros = linhas.toString().substring(30,32);
}

HeaderDAO.prototype.getZeros = function(){
	return this.zeros;
}

HeaderDAO.prototype.setZeros = function(linhas){
	this.conta = linhas.toString().substring(32,37);
}

HeaderDAO.prototype.getZeros = function(){
	return this.conta;
}

HeaderDAO.prototype.setDac = function(linhas){
	this.dac = linhas.toString().substring(37,38);
}

HeaderDAO.prototype.getDac = function(){
	return this.dac;
}

HeaderDAO.prototype.setBrancos = function(linhas){
	this.brancos = linhas.toString().substring(38,46);
}

HeaderDAO.prototype.getBrancos = function(){
	return this.brancos;
}

HeaderDAO.prototype.setNomeDaEmpresa = function(linhas){
	this.nomeDaEmpresa = linhas.toString().substring(46,76);
}

HeaderDAO.prototype.getNomeDaEmpresa = function(){
	return this.nomeDaEmpresa;
}

HeaderDAO.prototype.setCodigoDoBanco = function(linhas){
	this.codigoDoBanco = linhas.toString().substring(76,79);
}

HeaderDAO.prototype.getCodigoDoBanco = function(){
	return this.codigoDoBanco;
}

HeaderDAO.prototype.setNomeDoBanco = function(linhas){
	this.nomeDoBanco = linhas.toString().substring(79,94);
}

HeaderDAO.prototype.getNomeDoBanco = function(){
	return this.nomeDoBanco;
}

HeaderDAO.prototype.setDataDeGeracao = function(linhas){
	this.dataDeGeracao = linhas.toString().substring(94,100);
}

HeaderDAO.prototype.getDataDeGeracao = function(){
	return this.dataDeGeracao;
}

HeaderDAO.prototype.setBrancos2 = function(linhas){
	this.brancos2 = linhas.toString().substring(100,394);
}

HeaderDAO.prototype.getBrancos2 = function(){
	return this.brancos2;
}

HeaderDAO.prototype.setNumeroSequencial = function(linhas){
	this.numeroSequencial = linhas.toString().substring(394,400);
}

HeaderDAO.prototype.getNumeroSequencial = function(){
	return this.numeroSequencial;
}

module.exports = function(){
	return HeaderDAO;
}

