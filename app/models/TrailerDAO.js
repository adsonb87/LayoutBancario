function TrailerDAO(linhas){
	this._linhas = linhas;
}

var trailer = new Object();

TrailerDAO.prototype.setTrailer = function(){
	trailer._tipoDeRegistro = this._linhas[2].toString().substring(0,1);
	trailer._brancos = this._linhas[2].toString().substring(1,394);
	trailer._numeroSequencial = this._linhas[2].toString().substring(394,400);
	return trailer;
}

module.exports = function(){
	return TrailerDAO;
}




			