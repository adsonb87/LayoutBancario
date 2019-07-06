var tipoDeRegistroTransacao;
var codigoDeInscricaoTransacao;
var numeroDeInscricaoTransacao;	
var agenciaTransacao;
var zerosTransacao;
var contaTransacao;
var dacTransacao;
var brancosTransacao;
var instrucaoAlegacaoTransacao;
var usoDaEmpresaTransacao;
var nossoNumeroTransacao;
var quantidadeMoedaTransacao;
var numeroDaCarteiraTransacao;
var usoDoBancoTransacao;
var carteiraTransacao;
var codigoOcorrenciaTransacao;
var numeroDocumentoTransacao;
var vencimentoTransacao;
var valorTituloTransacao;
var codigoBancoTransacao;
var agenciaCobradoraTransacao;
var especieTransacao;
var aceiteTransacao;
var dataEmissaoTransacao;
var instrucao1Transacao;
var instrucao2Transacao;
var jurosDiaTransacao;
var dataDescontoTransacao;
var valorDescontoTransacao;
var valorIOFTransacao;
var abatimentoTransacao;
var codigoInscricaoTransacao;
var numeroInscricaoTransacao;
var nomeTransacao;
var brancos2Transacao;
var logradouroTransacao;
var bairroTransacao;
var cepTransacao;
var cidadeTransacao;
var estadoTransacao;
var sacadorAvalistaTransacao;
var brancos3Transacao;
var dataDeMoraTransacao;
var prazoTransacao;
var brancos4Transacao;
var numeroSequencialTransacao;


TransacaoDAO.prototype.setTipoDeRegistroTransacao = function(linhas){
	this.tipoDeRegistroTransacao = linhas.toString().substring(0,1);
}

TransacaoDAO.prototype.getTipoDeRegistroTransacao = function(){
	return this.tipoDeRegistroTransacao;
}

TransacaoDAO.prototype.setCodigoDeInscricaoTransacao = function(linhas){
	this.codigoDeInscricaoTransacao = linhas.toString().substring(1,3);
}

TransacaoDAO.prototype.getCodigoDeInscricaoTransacao = function(){
	return this.codigoDeInscricaoTransacao;
}

TransacaoDAO.prototype.setNumeroDeInscricaoTransacao = function(linhas){
	this.numeroDeInscricaoTransacao = linhas.toString().substring(3,17);
}

TransacaoDAO.prototype.getNumeroDeInscricaoTransacao = function(){
	return this.numeroDeInscricaoTransacao;
}

TransacaoDAO.prototype.setAgenciaTransacao = function(linhas){
	this.agenciaTransacao = linhas.toString().substring(17,21);
}

TransacaoDAO.prototype.getAgenciaTransacao = function(){
	return this.agenciaTransacao;
}

TransacaoDAO.prototype.setZerosTransacao = function(linhas){
	this.zerosTransacao = linhas.toString().substring(21,23);
}

TransacaoDAO.prototype.getZerosTransacao = function(){
	return this.zerosTransacao;
}

TransacaoDAO.prototype.setContaTransacao = function(linhas){
	this.contaTransacao = linhas.toString().substring(23,28);
}

TransacaoDAO.prototype.getContaTransacao = function(){
	return this.contaTransacao;
}

TransacaoDAO.prototype.setDacTransacao = function(linhas){
	this.dacTransacao = linhas.toString().substring(28,29);
}

TransacaoDAO.prototype.getDacTransacao = function(){
	return this.dacTransacao;
}

TransacaoDAO.prototype.setBrancosTransacao = function(linhas){
	this.brancosTransacao = linhas.toString().substring(29,33);
}

TransacaoDAO.prototype.getBrancosTransacao = function(linhas){
	return this.brancosTransacao;
}

TransacaoDAO.prototype.setInstrucaoAlegacaoTransacao = function(linhas){
	this.instrucaoAlegacaoTransacao = linhas.toString().substring(33,37);
}

TransacaoDAO.prototype.getInstrucaoAlegacaoTransacao = function(){
	return this.instrucaoAlegacaoTransacao;
}

TransacaoDAO.prototype.setUsoDaEmpresaTransacao = function(linhas){
	this.usoDaEmpresaTransacao = linhas.toString().substring(37,62);
}

TransacaoDAO.prototype.getUsoDaEmpresaTransacao = function(){
	return this.usoDaEmpresaTransacao;
}

TransacaoDAO.prototype.setNossoNumeroTransacao = function(linhas){
	this.nossoNumeroTransacao = linhas.toString().substring(62,70);
}

TransacaoDAO.prototype.getNossoNumeroTransacao = function(){
	return this.nossoNumeroTransacao;
}

TransacaoDAO.prototype.setQuantidadeMoedaTransacao = function(linhas){
	this.quantidadeMoedaTransacao = linhas.toString().substring(70,83);
}

TransacaoDAO.prototype.getQuantidadeMoedaTransacao = function(){
	return this.quantidadeMoedaTransacao;
}

TransacaoDAO.prototype.setNumeroDaCarteiraTransacao = function(linhas){
	this.numeroDaCarteiraTransacao = linhas.toString().substring(83,86);
}

TransacaoDAO.prototype.getNumeroDaCarteiraTransacao = function(){
	return this.numeroDaCarteiraTransacao;
}

TransacaoDAO.prototype.setUsoDoBancoTransacao = function(linhas){
	this.usoDoBancoTransacao = linhas.toString().substring(86,107);
}

TransacaoDAO.prototype.getUsoDoBancoTransacao = function(){
	return this.usoDoBancoTransacao;
}

TransacaoDAO.prototype.setCarteiraTransacao = function(linhas){
	this.carteiraTransacao = linhas.toString().substring(107,108);
}

TransacaoDAO.prototype.getCarteiraTransacao = function(){
	return this.carteiraTransacao;
}

TransacaoDAO.prototype.setCodigoOcorrenciaTransacao = function(linhas){
	this.codigoOcorrenciaTransacao = linhas.toString().substring(108,110);
}

TransacaoDAO.prototype.getCodigoOcorrenciaTransacao = function(){
	return this.codigoOcorrenciaTransacao;
}

TransacaoDAO.prototype.setNumeroDocumentoTransacao = function(linhas){
	this.numeroDocumentoTransacao = linhas.toString().substring(110,120);
}

TransacaoDAO.prototype.getNumeroDocumentoTransacao = function(){
	return this.numeroDocumentoTransacao;
}

TransacaoDAO.prototype.setVencimentoTransacao = function(linhas){
	this.vencimentoTransacao = linhas.toString().substring(120,126);
}	

TransacaoDAO.prototype.getVencimentoTransacao = function(){
	return this.vencimentoTransacao;
}	

TransacaoDAO.prototype.setValorTituloTransacao = function(linhas){
	this.valorTituloTransacao = linhas.toString().substring(126,139);
}

TransacaoDAO.prototype.getValorTituloTransacao = function(){
	return this.valorTituloTransacao;
}
	
TransacaoDAO.prototype.setCodigoBancoTransacao = function(linhas){
	this.codigoBancoTransacao = linhas.toString().substring(139,142);
}

TransacaoDAO.prototype.getCodigoBancoTransacao = function(){
	return this.codigoBancoTransacao;
}

TransacaoDAO.prototype.setAgenciaCobradoraTransacao = function(linhas){
	this.agenciaCobradoraTransacao = linhas.toString().substring(142,147);
}

TransacaoDAO.prototype.getAgenciaCobradoraTransacao = function(){
	return this.agenciaCobradoraTransacao;
}

TransacaoDAO.prototype.setEspecieTransacao = function(linhas){
	this.especieTransacao = linhas.toString().substring(147,149);
}

TransacaoDAO.prototype.getEspecieTransacao = function(){
	return this.especieTransacao;
}

TransacaoDAO.prototype.setAceiteTransacao = function(linhas){
	this.aceiteTransacao = linhas.toString().substring(149,150);
}

TransacaoDAO.prototype.getAceiteTransacao = function(){
	return this.aceiteTransacao;
}

TransacaoDAO.prototype.setDataEmissaoTransacao = function(linhas){
	this.dataEmissaoTransacao = linhas.toString().substring(150,156);
}

TransacaoDAO.prototype.getDataEmissaoTransacao = function(){
	return this.dataEmissaoTransacao;
}

TransacaoDAO.prototype.setInstrucao1Transacao = function(linhas){
	this.instrucao1Transacao = linhas.toString().substring(156,158);
}
	
TransacaoDAO.prototype.getInstrucao1Transacao = function(){
	return this.instrucao1Transacao;
}

TransacaoDAO.prototype.setInstrucao2Transacao = function(linhas){
	this.instrucao2Transacao = linhas.toString().substring(158,160);
}

TransacaoDAO.prototype.getInstrucao2Transacao = function(){
	return this.instrucao2Transacao;
}

TransacaoDAO.prototype.setJurosDiaTransacao = function(linhas){
	this.jurosDiaTransacao = linhas.toString().substring(160,173);
}

TransacaoDAO.prototype.getJurosDiaTransacao = function(){
	return this.jurosDiaTransacao;
}

TransacaoDAO.prototype.setDataDescontoTransacao = function(linhas){
	this.dataDescontoTransacao = linhas.toString().substring(173,179);
}

TransacaoDAO.prototype.getDataDescontoTransacao = function(){
	return this.dataDescontoTransacao;
}

TransacaoDAO.prototype.setValorDescontoTransacao = function(linhas){
	this.valorDescontoTransacao = linhas.toString().substring(179,192);
}

TransacaoDAO.prototype.getValorDescontoTransacao = function(){
	return this.valorDescontoTransacao;
}

TransacaoDAO.prototype.setValorIOFTransacao = function(linhas){
	this.valorIOFTransacao = linhas.toString().substring(192,205);
}

TransacaoDAO.prototype.getValorIOFTransacao = function(){
	return this.valorIOFTransacao;
}

TransacaoDAO.prototype.setAbatimentoTransacao = function(linhas){
	this.abatimentoTransacao = linhas.toString().substring(205,218);
}

TransacaoDAO.prototype.getAbatimentoTransacao = function(){
	return this.abatimentoTransacao;
}

TransacaoDAO.prototype.setCodigoInscricaoTransacao = function(linhas){
	this.codigoInscricaoTransacao = linhas.toString().substring(218,220);
}

TransacaoDAO.prototype.getCodigoInscricaoTransacao = function(){
	return this.codigoInscricaoTransacao;
}

TransacaoDAO.prototype.setNumeroInscricaoTransacao = function(linhas){
	this.numeroInscricaoTransacao = linhas.toString().substring(220,234);
}
	
TransacaoDAO.prototype.getNumeroInscricaoTransacao = function(){
	return this.numeroInscricaoTransacao;
}

TransacaoDAO.prototype.setNomeTransacao = function(linhas){
	this.nomeTransacao = linhas.toString().substring(234,264);
}

TransacaoDAO.prototype.getNomeTransacao = function(){
	return this.nomeTransacao;
}

TransacaoDAO.prototype.setBrancos2Transacao = function(linhas){
	this.brancos2Transacao = linhas.toString().substring(264,274);
}

TransacaoDAO.prototype.getBrancos2Transacao = function(){
	return this.brancos2Transacao;
}

TransacaoDAO.prototype.setLogradouroTransacao = function(linhas){
	this.logradouroTransacao = linhas.toString().substring(274,314);
}

TransacaoDAO.prototype.getLogradouroTransacao = function(){
	return this.logradouroTransacao;
}
	
TransacaoDAO.prototype.setBairroTransacao = function(linhas){
	this.bairroTransacao = linhas.toString().substring(314,326);
}

TransacaoDAO.prototype.getBairroTransacao = function(){
	return this.bairroTransacao;
}
	
TransacaoDAO.prototype.setCepTransacao = function(linhas){
	this.cepTransacao = linhas.toString().substring(326,334);
}

TransacaoDAO.prototype.getCepTransacao = function(){
	return this.cepTransacao;
}
	
TransacaoDAO.prototype.setCidadeTransacao = function(linhas){
	this.cidadeTransacao = linhas.toString().substring(334,349);
}

TransacaoDAO.prototype.getCidadeTransacao = function(){
	return this.cidadeTransacao;
}

TransacaoDAO.prototype.setEstadoTransacao = function(linhas){
	this.estadoTransacao = linhas.toString().substring(349,351);
}

TransacaoDAO.prototype.getEstadoTransacao = function(){
	return this.estadoTransacao;
}
	
TransacaoDAO.prototype.setSacadorAvalistaTransacao = function(linhas){
	this.sacadorAvalistaTransacao = linhas.toString().substring(351,381);
}
	
TransacaoDAO.prototype.getSacadorAvalistaTransacao = function(){
	return this.sacadorAvalistaTransacao;
}

TransacaoDAO.prototype.setBrancos3Transacao = function(linhas){
	this.brancos3Transacao = linhas.toString().substring(381,385);
}
	
TransacaoDAO.prototype.getBrancos3Transacao = function(){
	return this.brancos3Transacao;
}

TransacaoDAO.prototype.setDataDeMoraTransacao = function(linhas){
	this.dataDeMoraTransacao = linhas.toString().substring(385,391);
}
	
TransacaoDAO.prototype.getDataDeMoraTransacao = function(){
	return this.dataDeMoraTransacao;
}

TransacaoDAO.prototype.setPrazoTransacao = function(linhas){
	this.prazoTransacao = linhas.toString().substring(391,393);
}

TransacaoDAO.prototype.getPrazoTransacao = function(){
	return this.prazoTransacao;
}

TransacaoDAO.prototype.setBrancos4Transacao = function(linhas){
	this.brancos4Transacao = linhas.toString().substring(393,394);
}

TransacaoDAO.prototype.getBrancos4Transacao = function(){
	return this.brancos4Transacao = linhas.toString().substring(393,394);
}

TransacaoDAO.prototype.setNumeroSequencialTransacao = function(linhas){
	this.numeroSequencialTransacao = linhas.toString().substring(394,400);
}

TransacaoDAO.prototype.getNumeroSequencialTransacao = function(){
	return this.numeroSequencialTransacao;
}
