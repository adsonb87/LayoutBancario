for(var i=0; i<linhas.length; i++){
    if(linhas[i].toString().substring(0,1) == 9){
        this.setTipoDeRegistroTrailer(linhas[i]);      
        this.setBrancosTrailer(linhas[i]);
        this.setNumeroSequencialTrailer(linhas[i]);	
    }
}




