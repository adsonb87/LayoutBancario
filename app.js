/*const fs = require('fs');
//Lê o arquivo para que seja criado uma cópia
const readableStream = fs.createReadStream('PG08A14.txt');
//É criado uma cópia do arquivo
var writableStream = fs.createWriteStream('copy.txt');
//Cria o arquivo
readableStream.pipe(writableStream);*/

//Faz a requisição do método FileStram
var fs = require('fs');

//Usa o método Read File para ler o arquivo, como parametro é passado o arquivo e o encode para que o arquivo
//seja lido da maneira correta
fs.readFile('./CN06069C.RET', 'UTF8' ,function(err,data){
	if(err){
		console.error("Not Open: %s",err);
		process.exit(1);
	}
	//console.log(data.toString('utf8')); > no lugar de passar o encoding no read file se passa no metodo to string
	//console.log(data);

	var linhas = data.split(/\r?\n/);
	console.log(linhas[0].toString().substring(72,98));
	console.log(linhas[0].toString().substring(2,9));
	console.log(linhas[0].toString().substring(0,1));
	/*linhas.forEach(function(linha){
		var pos = linha.toString().substring(73,98);
		console.log(pos);
	})*/
});