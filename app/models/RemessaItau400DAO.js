function RemessaItau400DAO(){

}

//Header
var tipoDeRegistroHeader;
var operacaoHeader;
var literalDeRemessaHeader;
var codigoDeServicoHeader;
var literalDeServicoHeader;
var agenciaHeader;			
var zerosHeader;		
var contaHeader;			
var dacHeader;	    
var brancosHeader;
var nomeDaEmpresaHeader;
var codigoDoBancoHeader;	
var nomeDoBancoHeader;
var dataDeGeracaoHeader;
var brancosHeader2;
var numeroSequencialHeader;

//Trailer
var tipoDeRegistroTrailer;
var brancosTrailer;
var numeroSequencialTrailer;

//Transação
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


RemessaItau400DAO.prototype.setTipoDeRegistroHeader = function(linhas){
	this.tipoDeRegistroHeader = linhas.toString().substring(0,1);
}

RemessaItau400DAO.prototype.getTipoDeRegistroHeader = function(){
	return this.tipoDeRegistroHeader;
}

RemessaItau400DAO.prototype.setOperacaoHeader = function(linhas){
	this.operacaoHeader = linhas.toString().substring(1,2);
}

RemessaItau400DAO.prototype.getOperacaoHeader = function(){
	return this.operacaoHeader;
}

RemessaItau400DAO.prototype.setLiteralDeRemessaHeader = function(linhas){
	this.literalDeRemessaHeader = linhas.toString().substring(2,9);
}

RemessaItau400DAO.prototype.getLiteralDeRemessaHeader = function(){
	return this.literalDeRemessaHeader;
}

RemessaItau400DAO.prototype.setCodigoDeServicoHeader = function(linhas){
	this.codigoDeServicoHeader = linhas.toString().substring(9,11);
}

RemessaItau400DAO.prototype.getCodigoDeServicoHeader = function(){
	return this.codigoDeServicoHeader;
}

RemessaItau400DAO.prototype.setLiteralDeServicoHeader = function(linhas){
	this.literalDeServicoHeader = linhas.toString().substring(11,26);
}

RemessaItau400DAO.prototype.getLiteralDeServicoHeader = function(){
	return this.literalDeServicoHeader;
}

RemessaItau400DAO.prototype.setAgenciaHeader = function(linhas){
	this.agenciaHeader = linhas.toString().substring(26,30);
}

RemessaItau400DAO.prototype.getAgenciaHeader = function(){
	return this.agenciaHeader;
}

RemessaItau400DAO.prototype.setZerosHeader = function(linhas){
	this.zerosHeader = linhas.toString().substring(30,32);
}

RemessaItau400DAO.prototype.getZerosHeader = function(){
	return this.zerosHeader;
}

RemessaItau400DAO.prototype.setContaHeader = function(linhas){
	this.contaHeader = linhas.toString().substring(32,37);
}

RemessaItau400DAO.prototype.getContaHeader = function(){
	return this.contaHeader;
}

RemessaItau400DAO.prototype.setDacHeader = function(linhas){
	this.dacHeader = linhas.toString().substring(37,38);
}

RemessaItau400DAO.prototype.getDacHeader = function(){
	return this.dacHeader;
}

RemessaItau400DAO.prototype.setBrancosHeader = function(linhas){
	this.brancosHeader = linhas.toString().substring(38,46);
}

RemessaItau400DAO.prototype.getBrancosHeader = function(){
	return this.brancosHeader;
}

RemessaItau400DAO.prototype.setNomeDaEmpresaHeader = function(linhas){
	this.nomeDaEmpresaHeader = linhas.toString().substring(46,76);
}

RemessaItau400DAO.prototype.getNomeDaEmpresaHeader = function(){
	return this.nomeDaEmpresaHeader;
}

RemessaItau400DAO.prototype.setCodigoDoBancoHeader = function(linhas){
	this.codigoDoBancoHeader = linhas.toString().substring(76,79);
}

RemessaItau400DAO.prototype.getCodigoDoBancoHeader = function(){
	return this.codigoDoBancoHeader;
}

RemessaItau400DAO.prototype.setNomeDoBancoHeader = function(linhas){
	this.nomeDoBancoHeader = linhas.toString().substring(79,94);
}

RemessaItau400DAO.prototype.getNomeDoBancoHeader = function(){
	return this.nomeDoBancoHeader;
}

RemessaItau400DAO.prototype.setDataDeGeracaoHeader = function(linhas){
	this.dataDeGeracaoHeader = linhas.toString().substring(94,100);
}

RemessaItau400DAO.prototype.getDataDeGeracaoHeader = function(){
	return this.dataDeGeracaoHeader;
}

RemessaItau400DAO.prototype.setBrancos2Header = function(linhas){
	this.brancosHeader2 = linhas.toString().substring(100,394);
}

RemessaItau400DAO.prototype.getBrancos2Header = function(){
	return this.brancosHeader2;
}

RemessaItau400DAO.prototype.setNumeroSequencialHeader = function(linhas){
	this.numeroSequencialHeader = linhas.toString().substring(394,400);
}

RemessaItau400DAO.prototype.getNumeroSequencialHeader = function(){
	return this.numeroSequencialHeader;
}

RemessaItau400DAO.prototype.setTipoDeRegistroTrailer = function(linhas){
	this.tipoDeRegistroTrailer =  linhas.toString().substring(0,1);
}

RemessaItau400DAO.prototype.setBrancosTrailer = function(linhas){
	this.brancosTrailer =  linhas.toString().substring(1,394);
}

RemessaItau400DAO.prototype.setNumeroSequencialTrailer = function(linhas){
	this.numeroSequencialTrailer = linhas.toString().substring(394,400);
}

RemessaItau400DAO.prototype.getTipoDeRegistroTrailer = function(){
	return this.tipoDeRegistroTrailer;
}

RemessaItau400DAO.prototype.getBrancosTrailer = function(){
	return this.brancosTrailer;
}

RemessaItau400DAO.prototype.getNumeroSequencialTrailer = function(){
	return this.numeroSequencialTrailer;
}

RemessaItau400DAO.prototype.setTipoDeRegistroTransacao = function(linhas){
	this.tipoDeRegistroTransacao = linhas.toString().substring(0,1);
}

RemessaItau400DAO.prototype.getTipoDeRegistroTransacao = function(){
	return this.tipoDeRegistroTransacao;
}

RemessaItau400DAO.prototype.setCodigoDeInscricaoTransacao = function(linhas){
	this.codigoDeInscricaoTransacao = linhas.toString().substring(1,3);
}

RemessaItau400DAO.prototype.getCodigoDeInscricaoTransacao = function(){
	return this.codigoDeInscricaoTransacao;
}

RemessaItau400DAO.prototype.setNumeroDeInscricaoTransacao = function(linhas){
	this.numeroDeInscricaoTransacao = linhas.toString().substring(3,17);
}

RemessaItau400DAO.prototype.getNumeroDeInscricaoTransacao = function(){
	return this.numeroDeInscricaoTransacao;
}

RemessaItau400DAO.prototype.setAgenciaTransacao = function(linhas){
	this.agenciaTransacao = linhas.toString().substring(17,21);
}

RemessaItau400DAO.prototype.getAgenciaTransacao = function(){
	return this.agenciaTransacao;
}

RemessaItau400DAO.prototype.setZerosTransacao = function(linhas){
	this.zerosTransacao = linhas.toString().substring(21,23);
}

RemessaItau400DAO.prototype.getZerosTransacao = function(){
	return this.zerosTransacao;
}

RemessaItau400DAO.prototype.setContaTransacao = function(linhas){
	this.contaTransacao = linhas.toString().substring(23,28);
}

RemessaItau400DAO.prototype.getContaTransacao = function(){
	return this.contaTransacao;
}

RemessaItau400DAO.prototype.setDacTransacao = function(linhas){
	this.dacTransacao = linhas.toString().substring(28,29);
}

RemessaItau400DAO.prototype.getDacTransacao = function(){
	return this.dacTransacao;
}

RemessaItau400DAO.prototype.setBrancosTransacao = function(linhas){
	this.brancosTransacao = linhas.toString().substring(29,33);
}

RemessaItau400DAO.prototype.getBrancosTransacao = function(linhas){
	return this.brancosTransacao;
}

RemessaItau400DAO.prototype.setInstrucaoAlegacaoTransacao = function(linhas){
	this.instrucaoAlegacaoTransacao = linhas.toString().substring(33,37);
}

RemessaItau400DAO.prototype.getInstrucaoAlegacaoTransacao = function(){
	return this.instrucaoAlegacaoTransacao;
}

RemessaItau400DAO.prototype.setUsoDaEmpresaTransacao = function(linhas){
	this.usoDaEmpresaTransacao = linhas.toString().substring(37,62);
}

RemessaItau400DAO.prototype.getUsoDaEmpresaTransacao = function(){
	return this.usoDaEmpresaTransacao;
}

RemessaItau400DAO.prototype.setNossoNumeroTransacao = function(linhas){
	this.nossoNumeroTransacao = linhas.toString().substring(62,70);
}

RemessaItau400DAO.prototype.getNossoNumeroTransacao = function(){
	return this.nossoNumeroTransacao;
}

RemessaItau400DAO.prototype.setQuantidadeMoedaTransacao = function(linhas){
	this.quantidadeMoedaTransacao = linhas.toString().substring(70,83);
}

RemessaItau400DAO.prototype.getQuantidadeMoedaTransacao = function(){
	return this.quantidadeMoedaTransacao;
}

RemessaItau400DAO.prototype.setNumeroDaCarteiraTransacao = function(linhas){
	this.numeroDaCarteiraTransacao = linhas.toString().substring(83,86);
}

RemessaItau400DAO.prototype.getNumeroDaCarteiraTransacao = function(){
	return this.numeroDaCarteiraTransacao;
}

RemessaItau400DAO.prototype.setUsoDoBancoTransacao = function(linhas){
	this.usoDoBancoTransacao = linhas.toString().substring(86,107);
}

RemessaItau400DAO.prototype.getUsoDoBancoTransacao = function(){
	return this.usoDoBancoTransacao;
}

RemessaItau400DAO.prototype.setCarteiraTransacao = function(linhas){
	this.carteiraTransacao = linhas.toString().substring(107,108);
}

RemessaItau400DAO.prototype.getCarteiraTransacao = function(){
	return this.carteiraTransacao;
}

RemessaItau400DAO.prototype.setCodigoOcorrenciaTransacao = function(linhas){
	this.codigoOcorrenciaTransacao = linhas.toString().substring(108,110);
}

RemessaItau400DAO.prototype.getCodigoOcorrenciaTransacao = function(){
	return this.codigoOcorrenciaTransacao;
}

RemessaItau400DAO.prototype.setNumeroDocumentoTransacao = function(linhas){
	this.numeroDocumentoTransacao = linhas.toString().substring(110,120);
}

RemessaItau400DAO.prototype.getNumeroDocumentoTransacao = function(){
	return this.numeroDocumentoTransacao;
}

RemessaItau400DAO.prototype.setVencimentoTransacao = function(linhas){
	this.vencimentoTransacao = linhas.toString().substring(120,126);
}	

RemessaItau400DAO.prototype.getVencimentoTransacao = function(){
	return this.vencimentoTransacao;
}	

RemessaItau400DAO.prototype.setValorTituloTransacao = function(linhas){
	this.valorTituloTransacao = linhas.toString().substring(126,139);
}

RemessaItau400DAO.prototype.getValorTituloTransacao = function(){
	return this.valorTituloTransacao;
}
	
RemessaItau400DAO.prototype.setCodigoBancoTransacao = function(linhas){
	this.codigoBancoTransacao = linhas.toString().substring(139,142);
}

RemessaItau400DAO.prototype.getCodigoBancoTransacao = function(){
	return this.codigoBancoTransacao;
}

RemessaItau400DAO.prototype.setAgenciaCobradoraTransacao = function(linhas){
	this.agenciaCobradoraTransacao = linhas.toString().substring(142,147);
}

RemessaItau400DAO.prototype.getAgenciaCobradoraTransacao = function(){
	return this.agenciaCobradoraTransacao;
}

RemessaItau400DAO.prototype.setEspecieTransacao = function(linhas){
	this.especieTransacao = linhas.toString().substring(147,149);
}

RemessaItau400DAO.prototype.getEspecieTransacao = function(){
	return this.especieTransacao;
}

RemessaItau400DAO.prototype.setAceiteTransacao = function(linhas){
	this.aceiteTransacao = linhas.toString().substring(149,150);
}

RemessaItau400DAO.prototype.getAceiteTransacao = function(){
	return this.aceiteTransacao;
}

RemessaItau400DAO.prototype.setDataEmissaoTransacao = function(linhas){
	this.dataEmissaoTransacao = linhas.toString().substring(150,156);
}

RemessaItau400DAO.prototype.getDataEmissaoTransacao = function(){
	return this.dataEmissaoTransacao;
}

RemessaItau400DAO.prototype.setInstrucao1Transacao = function(linhas){
	this.instrucao1Transacao = linhas.toString().substring(156,158);
}
	
RemessaItau400DAO.prototype.getInstrucao1Transacao = function(){
	return this.instrucao1Transacao;
}

RemessaItau400DAO.prototype.setInstrucao2Transacao = function(linhas){
	this.instrucao2Transacao = linhas.toString().substring(158,160);
}

RemessaItau400DAO.prototype.getInstrucao2Transacao = function(){
	return this.instrucao2Transacao;
}

RemessaItau400DAO.prototype.setJurosDiaTransacao = function(linhas){
	this.jurosDiaTransacao = linhas.toString().substring(160,173);
}

RemessaItau400DAO.prototype.getJurosDiaTransacao = function(){
	return this.jurosDiaTransacao;
}

RemessaItau400DAO.prototype.setDataDescontoTransacao = function(linhas){
	this.dataDescontoTransacao = linhas.toString().substring(173,179);
}

RemessaItau400DAO.prototype.getDataDescontoTransacao = function(){
	return this.dataDescontoTransacao;
}

RemessaItau400DAO.prototype.setValorDescontoTransacao = function(linhas){
	this.valorDescontoTransacao = linhas.toString().substring(179,192);
}

RemessaItau400DAO.prototype.getValorDescontoTransacao = function(){
	return this.valorDescontoTransacao;
}

RemessaItau400DAO.prototype.setValorIOFTransacao = function(linhas){
	this.valorIOFTransacao = linhas.toString().substring(192,205);
}

RemessaItau400DAO.prototype.getValorIOFTransacao = function(){
	return this.valorIOFTransacao;
}

RemessaItau400DAO.prototype.setAbatimentoTransacao = function(linhas){
	this.abatimentoTransacao = linhas.toString().substring(205,218);
}

RemessaItau400DAO.prototype.getAbatimentoTransacao = function(){
	return this.abatimentoTransacao;
}

RemessaItau400DAO.prototype.setCodigoInscricaoTransacao = function(linhas){
	this.codigoInscricaoTransacao = linhas.toString().substring(218,220);
}

RemessaItau400DAO.prototype.getCodigoInscricaoTransacao = function(){
	return this.codigoInscricaoTransacao;
}

RemessaItau400DAO.prototype.setNumeroInscricaoTransacao = function(linhas){
	this.numeroInscricaoTransacao = linhas.toString().substring(220,234);
}
	
RemessaItau400DAO.prototype.getNumeroInscricaoTransacao = function(){
	return this.numeroInscricaoTransacao;
}

RemessaItau400DAO.prototype.setNomeTransacao = function(linhas){
	this.nomeTransacao = linhas.toString().substring(234,264);
}

RemessaItau400DAO.prototype.getNomeTransacao = function(){
	return this.nomeTransacao;
}

RemessaItau400DAO.prototype.setBrancos2Transacao = function(linhas){
	this.brancos2Transacao = linhas.toString().substring(264,274);
}

RemessaItau400DAO.prototype.getBrancos2Transacao = function(){
	return this.brancos2Transacao;
}

RemessaItau400DAO.prototype.setLogradouroTransacao = function(linhas){
	this.logradouroTransacao = linhas.toString().substring(274,314);
}

RemessaItau400DAO.prototype.getLogradouroTransacao = function(){
	return this.logradouroTransacao;
}
	
RemessaItau400DAO.prototype.setBairroTransacao = function(linhas){
	this.bairroTransacao = linhas.toString().substring(314,326);
}

RemessaItau400DAO.prototype.getBairroTransacao = function(){
	return this.bairroTransacao;
}
	
RemessaItau400DAO.prototype.setCepTransacao = function(linhas){
	this.cepTransacao = linhas.toString().substring(326,334);
}

RemessaItau400DAO.prototype.getCepTransacao = function(){
	return this.cepTransacao;
}
	
RemessaItau400DAO.prototype.setCidadeTransacao = function(linhas){
	this.cidadeTransacao = linhas.toString().substring(334,349);
}

RemessaItau400DAO.prototype.getCidadeTransacao = function(){
	return this.cidadeTransacao;
}

RemessaItau400DAO.prototype.setEstadoTransacao = function(linhas){
	this.estadoTransacao = linhas.toString().substring(349,351);
}

RemessaItau400DAO.prototype.getEstadoTransacao = function(){
	return this.estadoTransacao;
}
	
RemessaItau400DAO.prototype.setSacadorAvalistaTransacao = function(linhas){
	this.sacadorAvalistaTransacao = linhas.toString().substring(351,381);
}
	
RemessaItau400DAO.prototype.getSacadorAvalistaTransacao = function(){
	return this.sacadorAvalistaTransacao;
}

RemessaItau400DAO.prototype.setBrancos3Transacao = function(linhas){
	this.brancos3Transacao = linhas.toString().substring(381,385);
}
	
RemessaItau400DAO.prototype.getBrancos3Transacao = function(){
	return this.brancos3Transacao;
}

RemessaItau400DAO.prototype.setDataDeMoraTransacao = function(linhas){
	this.dataDeMoraTransacao = linhas.toString().substring(385,391);
}
	
RemessaItau400DAO.prototype.getDataDeMoraTransacao = function(){
	return this.dataDeMoraTransacao;
}

RemessaItau400DAO.prototype.setPrazoTransacao = function(linhas){
	this.prazoTransacao = linhas.toString().substring(391,393);
}

RemessaItau400DAO.prototype.getPrazoTransacao = function(){
	return this.prazoTransacao;
}

RemessaItau400DAO.prototype.setBrancos4Transacao = function(linhas){
	this.brancos4Transacao = linhas.toString().substring(393,394);
}

RemessaItau400DAO.prototype.getBrancos4Transacao = function(){
	return this.brancos4Transacao = linhas.toString().substring(393,394);
}

RemessaItau400DAO.prototype.setNumeroSequencialTransacao = function(linhas){
	this.numeroSequencialTransacao = linhas.toString().substring(394,400);
}

RemessaItau400DAO.prototype.getNumeroSequencialTransacao = function(){
	return this.numeroSequencialTransacao;
}

RemessaItau400DAO.prototype.setHeader = function(linhas){
	console.log("linha1>>"+linhas);
	this.setTipoDeRegistroHeader(linhas);
	this.setOperacaoHeader(linhas);
	this.setLiteralDeRemessaHeader(linhas);
	this.setCodigoDeServicoHeader(linhas);
	this.setLiteralDeServicoHeader(linhas);
	this.setAgenciaHeader(linhas);			
	this.setZerosHeader(linhas);		
	this.setContaHeader(linhas);			
	this.setDacHeader(linhas);	    
	this.setBrancosHeader(linhas);
	this.setNomeDaEmpresaHeader(linhas);
	this.setCodigoDoBancoHeader(linhas);	
	this.setNomeDoBancoHeader(linhas);
	this.setDataDeGeracaoHeader(linhas);
	this.setBrancos2Header(linhas);
	this.setNumeroSequencialHeader(linhas);
}

RemessaItau400DAO.prototype.setTrailer = function(linhas){
	console.log("linha3>>"+linhas);
	this.setTipoDeRegistroTrailer(linhas);      
	this.setBrancosTrailer(linhas);
	this.setNumeroSequencialTrailer(linhas);	
}

RemessaItau400DAO.prototype.setTransacao = function(linhas){
	console.log("linha2>>"+linhas);
	this.setTipoDeRegistroTransacao(linhas);
	this.setCodigoDeInscricaoTransacao(linhas);
	this.setNumeroDeInscricaoTransacao(linhas);	
	this.setAgenciaTransacao(linhas);
	this.setZerosTransacao(linhas);
	this.setContaTransacao(linhas);
	this.setDacTransacao(linhas);
	this.setBrancosTransacao(linhas);
	this.setInstrucaoAlegacaoTransacao(linhas);
	this.setUsoDaEmpresaTransacao(linhas);
	this.setNossoNumeroTransacao(linhas);
	this.setQuantidadeMoedaTransacao(linhas);
	this.setNumeroDaCarteiraTransacao(linhas);
	this.setUsoDoBancoTransacao(linhas);
	this.setCarteiraTransacao(linhas);
	this.setCodigoOcorrenciaTransacao(linhas);
	this.setNumeroDocumentoTransacao(linhas);
	this.setVencimentoTransacao(linhas);
	this.setValorTituloTransacao(linhas);
	this.setCodigoBancoTransacao(linhas);
	this.setAgenciaCobradoraTransacao(linhas);
	this.setEspecieTransacao(linhas);
	this.setAceiteTransacao(linhas);
	this.setDataEmissaoTransacao(linhas);
	this.setInstrucao1Transacao(linhas);
	this.setInstrucao2Transacao(linhas);
	this.setJurosDiaTransacao(linhas);
	this.setDataDescontoTransacao(linhas);
	this.setValorDescontoTransacao(linhas);
	this.setValorIOFTransacao(linhas);
	this.setAbatimentoTransacao(linhas);
	this.setCodigoInscricaoTransacao(linhas);
	this.setNumeroInscricaoTransacao(linhas);
	this.setNomeTransacao(linhas);
	this.setBrancos2Transacao(linhas);
	this.setLogradouroTransacao(linhas);
	this.setBairroTransacao(linhas);
	this.setCepTransacao(linhas);
	this.setCidadeTransacao(linhas);
	this.setEstadoTransacao(linhas);
	this.setSacadorAvalistaTransacao(linhas);
	this.setBrancos3Transacao(linhas);
	this.setDataDeMoraTransacao(linhas);
	this.setPrazoTransacao(linhas);
	this.setBrancos4Transacao(linhas);
	this.setNumeroSequencialTransacao(linhas);
}

module.exports = function(){
    return RemessaItau400DAO;
}