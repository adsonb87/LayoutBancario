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

RemessaItau400DAO.prototype.setBrancosHeader2 = function(linhas){
	this.brancosHeader2 = linhas.toString().substring(100,394);
}

RemessaItau400DAO.prototype.getBrancosHeader2 = function(){
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




module.exports = function(){
    return RemessaItau400DAO;
}