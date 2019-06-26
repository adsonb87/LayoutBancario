function TransacaoDAO(){

}

var tipoDeRegistro;
var codigoDeInscricao;
var numeroDeInscricao;	
var agencia;
var zeros;
var conta;
var dac;
var brancos;
var instrucaoAlegacao;
var usoDaEmpresa;
var nossoNumero;
var quantidadeMoeda;
var numeroDaCarteira;
var usoDoBanco;
var carteira;
var codigoOcorrenca;
var numeroDocumento;
var vencimento;
var valorTitulo;
var codigoBanco;
var agenciaCobradora;
var especie;
var aceite;
var dataEmissao;
var instrucao1;
var instrucao2;
var juroDia;
var dataDesconto;
var valorDesconto;
var valorIOF;
var abatimento;
var codigoInscricao;
var numeroInscricao;
var nome;
var brancos2;
var logradouro;
var bairro;
var cep;
var cidade;
var estado;
var sacadorAvalista;
var brancos3;
var dataDeMora;
var prazo;
var brancos4;
var numeroSequencial;


TransacaoDAO.prototype.setTipoDeRegistro = function(linhas){
	this.tipoDeRegistro = linhas.toString().substring(0,1);
}

TransacaoDAO.prototype.getTipoDeRegistro = function(){
	return this.tipoDeRegistro;
}

TransacaoDAO.prototype.setCodigoDeInscricao = function(linhas){
	this.codigoDeInscricao = linhas.toString().substring(1,3);
}

TransacaoDAO.prototype.getCodigoDeInscricao = function(){
	return this.codigoDeInscricao;
}

TransacaoDAO.prototype.setNumeroDeInscricao = function(linhas){
	this.numeroDeInscricao = linhas.toString().substring(3,17);
}

TransacaoDAO.prototype.getNumeroDeInscricao = function(){
	return this.numeroDeInscricao;
}

TransacaoDAO.prototype.setAgencia = function(linhas){
	this.agencia = linhas.toString().substring(17,21);
}

TransacaoDAO.prototype.getAgencia = function(){
	return this.agencia;
}

TransacaoDAO.prototype.setZeros = function(linhas){
	this.zeros = linhas.toString().substring(21,23);
}

TransacaoDAO.prototype.getZeros = function(){
	return this.zeros;
}

TransacaoDAO.prototype.setAgencia = function(linhas){
	this.conta = linhas.toString().substring(23,28);
}

TransacaoDAO.prototype.getAgencia = function(){
	return this.conta;
}

TransacaoDAO.prototype.setDac = function(linhas){
	this.dac = linhas.toString().substring(28,29);
}

TransacaoDAO.prototype.getDac = function(){
	return this.dac;
}

TransacaoDAO.prototype.setBrancos = function(linhas){
	this.brancos = linhas.toString().substring(29,33);
}

TransacaoDAO.prototype.getBrancos = function(linhas){
	return this.brancos;
}

TransacaoDAO.prototype.setInstrucaoAlegacao = function(linhas){
	this.instrucaoAlegacao = linhas.toString().substring(33,37);
}

TransacaoDAO.prototype.getInstrucaoAlegacao = function(){
	return this.instrucaoAlegacao;
}

TransacaoDAO.prototype.setUsoDaEmpresa = function(linhas){
	this.usoDaEmpresa = linhas.toString().substring(37,62);
}

TransacaoDAO.prototype.getUsoDaEmpresa = function(){
	return this.usoDaEmpresa;
}

TransacaoDAO.prototype.setNossoNumero = function(linhas){
	this.nossoNumero = linhas.toString().substring(62,70);
}

TransacaoDAO.prototype.getNossoNumero = function(){
	return this.nossoNumero;
}

TransacaoDAO.prototype.setQuantidadeMoeda = function(linhas){
	this.quantidadeMoeda = linhas.toString().substring(70,83);
}

TransacaoDAO.prototype.getQuantidadeMoeda = function(){
	return this.quantidadeMoeda;
}

TransacaoDAO.prototype.setNumeroDaCarteira = function(linhas){
	this.numeroDaCarteira = linhas.toString().substring(83,86);
}

TransacaoDAO.prototype.getNumeroDaCarteira = function(){
	return this.numeroDaCarteira;
}

TransacaoDAO.prototype.setUsoDoBanco = function(linhas){
	this.usoDoBanco = linhas.toString().substring(86,107);
}

TransacaoDAO.prototype.getUsoDoBanco = function(){
	return this.usoDoBanco;
}

TransacaoDAO.prototype.setCarteira = function(linhas){
	this.carteira = linhas.toString().substring(107,108);
}

TransacaoDAO.prototype.getCarteira = function(){
	return this.carteira;
}

TransacaoDAO.prototype.setCodigoOcorrenca = function(linhas){
	this.codigoOcorrenca = linhas.toString().substring(108,110);
}

TransacaoDAO.prototype.getCodigoOcorrenca = function(){
	return this.codigoOcorrenca;
}

TransacaoDAO.prototype.setNumeroDocumento = function(linhas){
	this.numeroDocumento = linhas.toString().substring(110,120);
}

TransacaoDAO.prototype.getNumeroDocumento = function(){
	return this.numeroDocumento;
}

TransacaoDAO.prototype.setVencimento = function(linhas){
	this.vencimento = linhas.toString().substring(120,126);
}	

TransacaoDAO.prototype.getVencimento = function(){
	return this.vencimento;
}	

TransacaoDAO.prototype.setValorTitulo = function(linhas){
	this.valorTitulo = linhas.toString().substring(126,139);
}

TransacaoDAO.prototype.getValorTitulo = function(){
	return this.valorTitulo;
}
	
TransacaoDAO.prototype.setCodigoBanco = function(linhas){
	this.codigoBanco = linhas.toString().substring(139,142);
}

TransacaoDAO.prototype.getCodigoBanco = function(){
	return this.codigoBanco;
}

TransacaoDAO.prototype.setAgenciaCobradora = function(linhas){
	this.agenciaCobradora = linhas.toString().substring(142,147);
}

TransacaoDAO.prototype.getAgenciaCobradora = function(){
	return this.agenciaCobradora;
}

TransacaoDAO.prototype.setEspecie = function(linhas){
	this.especie = linhas.toString().substring(147,149);
}

TransacaoDAO.prototype.getEspecie = function(){
	return this.especie;
}

TransacaoDAO.prototype.setAceite = function(linhas){
	this.aceite = linhas.toString().substring(149,150);
}

TransacaoDAO.prototype.getAceite = function(){
	return this.aceite;
}

TransacaoDAO.prototype.setDataEmissao = function(linhas){
	this.dataEmissao = linhas.toString().substring(150,156);
}

TransacaoDAO.prototype.getDataEmissao = function(){
	return this.dataEmissao;
}

TransacaoDAO.prototype.setInstrucao1 = function(linhas){
	this.instrucao1 = linhas.toString().substring(156,158);
}
	
TransacaoDAO.prototype.getInstrucao1 = function(){
	return this.instrucao1;
}

TransacaoDAO.prototype.setInstrucao2 = function(linhas){
	this.instrucao2 = linhas.toString().substring(158,160);
}

TransacaoDAO.prototype.getInstrucao2 = function(){
	return this.instrucao2;
}

TransacaoDAO.prototype.setJuroDia = function(linhas){
	this.juroDia = linhas.toString().substring(160,173);
}

TransacaoDAO.prototype.getJuroDia = function(){
	return this.juroDia;
}

TransacaoDAO.prototype.setDataDesconto = function(linhas){
	this.dataDesconto = linhas.toString().substring(173,179);
}

TransacaoDAO.prototype.getDataDesconto = function(){
	return this.dataDesconto;
}

TransacaoDAO.prototype.setValorDesconto = function(linhas){
	this.valorDesconto = linhas.toString().substring(179,192);
}

TransacaoDAO.prototype.getValorDesconto = function(){
	return this.valorDesconto;
}

TransacaoDAO.prototype.setValorIOF = function(linhas){
	this.valorIOF = linhas.toString().substring(192,205);
}

TransacaoDAO.prototype.getValorIOF = function(){
	return this.valorIOF;
}

TransacaoDAO.prototype.setAbatimento = function(linhas){
	this.abatimento = linhas.toString().substring(205,218);
}

TransacaoDAO.prototype.getAbatimento = function(){
	return this.abatimento;
}

TransacaoDAO.prototype.setCodigoInscricao = function(linhas){
	this.codigoInscricao = linhas.toString().substring(218,220);
}

TransacaoDAO.prototype.getCodigoInscricao = function(){
	return this.codigoInscricao;
}

TransacaoDAO.prototype.setNumeroInscricao = function(linhas){
	this.numeroInscricao = linhas.toString().substring(220,234);
}
	
TransacaoDAO.prototype.getNumeroInscricao = function(){
	return this.numeroInscricao;
}

TransacaoDAO.prototype.setNome = function(linhas){
	this.nome = linhas.toString().substring(234,264);
}

TransacaoDAO.prototype.getNome = function(){
	return this.nome;
}

TransacaoDAO.prototype.setBrancos2 = function(linhas){
	this.brancos2 = linhas.toString().substring(264,274);
}

TransacaoDAO.prototype.getBrancos2 = function(){
	return this.brancos2;
}

TransacaoDAO.prototype.setLogradouro = function(linhas){
	this.logradouro = linhas.toString().substring(274,314);
}

TransacaoDAO.prototype.getLogradouro = function(){
	return this.logradouro;
}
	
TransacaoDAO.prototype.setBairro = function(linhas){
	this.bairro = linhas.toString().substring(314,326);
}

TransacaoDAO.prototype.getBairro = function(){
	return this.bairro;
}
	
TransacaoDAO.prototype.setCep = function(linhas){
	this.cep = linhas.toString().substring(326,334);
}

TransacaoDAO.prototype.getCep = function(){
	return this.cep;
}
	
TransacaoDAO.prototype.setCidade = function(linhas){
	this.cidade = linhas.toString().substring(334,349);
}

TransacaoDAO.prototype.getCidade = function(){
	return this.cidade;
}

TransacaoDAO.prototype.setEstado = function(linhas){
	this.estado = linhas.toString().substring(349,351);
}

TransacaoDAO.prototype.getEstado = function(){
	return this.estado;
}
	
TransacaoDAO.prototype.setSacadorAvalista = function(linhas){
	this.sacadorAvalista = linhas.toString().substring(351,381);
}
	
TransacaoDAO.prototype.getSacadorAvalista = function(){
	return this.sacadorAvalista;
}

TransacaoDAO.prototype.setBrancos3 = function(linhas){
	this.brancos3 = linhas.toString().substring(381,385);
}
	
TransacaoDAO.prototype.getBrancos3 = function(){
	return this.brancos3;
}

TransacaoDAO.prototype.setdataDeMora = function(linhas){
	this.dataDeMora = linhas.toString().substring(385,391);
}
	
TransacaoDAO.prototype.getdataDeMora = function(){
	return this.dataDeMora;
}

TransacaoDAO.prototype.setPrazo = function(linhas){
	this.prazo = linhas.toString().substring(391,393);
}

TransacaoDAO.prototype.getPrazo = function(){
	return this.prazo;
}

TransacaoDAO.prototype.setBrancos4 = function(linhas){
	this.brancos4 = linhas.toString().substring(393,394);
}

TransacaoDAO.prototype.getBrancos4 = function(){
	return this.brancos4 = linhas.toString().substring(393,394);
}

TransacaoDAO.prototype.setNumeroSequencial = function(linhas){
	this.numeroSequencial = linhas.toString().substring(394,400);
}

TransacaoDAO.prototype.getNumeroSequencial = function(){
	return this.numeroSequencial;
}

module.exports = function(){
	return TransacaoDAO;
}