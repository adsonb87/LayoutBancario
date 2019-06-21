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
fs.readFile('./RM181018.txt', 'UTF8' ,function(err,data){
	if(err){
		console.error("Not Open: %s",err);
		process.exit(1);
	}
	//console.log(data.toString('utf8')); > no lugar de passar o encoding no read file se passa no metodo to string
	//console.log(data);

	var linhas = data.split(/\r?\n/);
	//header
	/*console.log(linhas[0].toString().substring(0,1));
	console.log(linhas[0].toString().substring(1,2));
	console.log(linhas[0].toString().substring(2,9));
	console.log(linhas[0].toString().substring(9,11));
	console.log(linhas[0].toString().substring(11,26));
	console.log(linhas[0].toString().substring(26,30));
	console.log(linhas[0].toString().substring(30,32));
	console.log(linhas[0].toString().substring(32,37));
	console.log(linhas[0].toString().substring(37,38));
	console.log(linhas[0].toString().substring(38,46));
	console.log(linhas[0].toString().substring(46,76));
	console.log(linhas[0].toString().substring(76,79));
	console.log(linhas[0].toString().substring(79,94));
	console.log(linhas[0].toString().substring(94,100));
	console.log(linhas[0].toString().substring(100,394));
	console.log(linhas[0].toString().substring(394,400));*/
	
	
	/*linhas.forEach(function(linha){
		var pos = linha.toString().substring(73,98);
		console.log(pos);
		
	})*/
});