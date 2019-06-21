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

	//Detalhe
	/*for(var i=1 ; i<linhas.length; i++){
		if(linhas[i].toString().substring(0,1) != 9){
			console.log(linhas[i].toString().substring(0,1));
			console.log(linhas[i].toString().substring(1,3));
			console.log(linhas[i].toString().substring(3,17));
			console.log(linhas[i].toString().substring(17,21));
			console.log(linhas[i].toString().substring(21,23));
			console.log(linhas[i].toString().substring(23,28));
			console.log(linhas[i].toString().substring(28,29));
			console.log(linhas[i].toString().substring(29,33));
			console.log(linhas[i].toString().substring(33,37));
			console.log(linhas[i].toString().substring(37,62));
			console.log(linhas[i].toString().substring(62,70));
			console.log(linhas[i].toString().substring(71,83));
			console.log(linhas[i].toString().substring(83,86));
			console.log(linhas[i].toString().substring(86,107));
			console.log(linhas[i].toString().substring(107,108));
			console.log(linhas[i].toString().substring(108,110));
			console.log(linhas[i].toString().substring(110,120));
			console.log(linhas[i].toString().substring(120,126));
			console.log(linhas[i].toString().substring(126,139));
			console.log(linhas[i].toString().substring(139,142));
			console.log(linhas[i].toString().substring(142,147));
			console.log(linhas[i].toString().substring(147,149));
			console.log(linhas[i].toString().substring(149,150));
			console.log(linhas[i].toString().substring(150,156));
			console.log(linhas[i].toString().substring(156,158));
			console.log(linhas[i].toString().substring(158,160));
			console.log(linhas[i].toString().substring(160,173));
			console.log(linhas[i].toString().substring(173,179));
			console.log(linhas[i].toString().substring(179,192));
			console.log(linhas[i].toString().substring(192,205));
			console.log(linhas[i].toString().substring(205,218));
			console.log(linhas[i].toString().substring(218,220));
			console.log(linhas[i].toString().substring(220,234));
			console.log(linhas[i].toString().substring(234,264));
			console.log(linhas[i].toString().substring(264,274));
			console.log(linhas[i].toString().substring(274,314));
			console.log(linhas[i].toString().substring(314,326));
			console.log(linhas[i].toString().substring(326,334));
			console.log(linhas[i].toString().substring(334,349));
			console.log(linhas[i].toString().substring(349,351));
			console.log(linhas[i].toString().substring(351,381));
			console.log(linhas[i].toString().substring(381,385));
			console.log(linhas[i].toString().substring(385,391));
			console.log(linhas[i].toString().substring(391,393));
			console.log(linhas[i].toString().substring(393,394));
			console.log(linhas[i].toString().substring(394,400));
		}
	}*/


	/*linhas.forEach(function(linha){
		var pos = linha.toString().substring(73,98);
		console.log(pos);
		
	})*/
});