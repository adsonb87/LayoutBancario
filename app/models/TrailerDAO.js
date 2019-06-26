function TrailerDAO(){

}

var tipoDeRegistro;
var brancos;
var numeroSequencial;


TrailerDAO.prototype.setTipoDeRegistro = function(linhas){
	this.tipoDeRegistro =  linhas.toString().substring(0,1);
}

TrailerDAO.prototype.setBrancos = function(linhas){
	this.brancos =  linhas.toString().substring(1,394);
}

TrailerDAO.prototype.setNumeroSequencial = function(linhas){
	this.numeroSequencial = linhas.toString().substring(394,400);
}

TrailerDAO.prototype.getTipoDeRegistro = function(){
	return this.tipoDeRegistro;
}

TrailerDAO.prototype.getBrancos = function(){
	return this.brancos;
}

TrailerDAO.prototype.getNumeroSequencial = function(){
	return this.numeroSequencial;
}

module.exports = function(){
	return TrailerDAO;
}




			