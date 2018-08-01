var fs = require("fs");
var http = require("http");
var url = require("url");


//reading from a .txt file:
// fs.readFile("proizvodi.txt", "utf-8", (error, data) =>{
// 	if (error) throw error;
// 	// console.log(data);
// 	var splittedData = data.split("\n");
// 	// console.log(splittedData);

// 	for (let i=0; i<splittedData.length; i++){
// 		// console.log(splittedData[i]);
// 		let product = splittedData[i].split(" ");
// 		let productName = product[0];
// 		let productQuantity = product[1];

// 		if(productQuantity > 50){
// 			console.log(productName);
// 		}
// 	}

// });

//reading from a .json file:
// fs.readFile("proizvodi.json", (error, data) =>{
// 	if (error) throw error;
// 	var jsonData = JSON.parse(data);
// 	console.log(jsonData);

// 	var result = "";
// 	var finalData = "";

// 	jsonData.forEach(proizvod =>{
// 		var cena = proizvod.quantity * proizvod.price;
// 		finalData += "Proizvod: "+proizvod.name+", cena: "+cena+"\r\n";

// 	});
// 		console.log(finalData);
// 		fs.appendFile("ceni.txt", finalData, (err) =>{
// 			if (err) throw err;
// 			else{
// 				console.log("Data added!");
// 			}
// 		});
// });

//Kreiranje lokalen server:
// http.createServer(function(request, response){
// 	if (request.url == "/home"){
// 		response.write("Hello to the HOME page.")
// 		response.end();
// 	}
// 	else if (request.url == "/messages"){
// 		response.write("Hello to the MESSAGES page.")
// 		response.end();
// 	}
// 	else{
// 		response.writeHead(404, "Not found");
// 		response.write("Page not found");
// 		response.end();
// 	}
// }).listen(8080);

// http.createServer(function(request, response){
// 	var q = url.parse(request.url, true).query;
// 	var result = "Ime: "+q.name+"Email: "+q.email;
// 	response.write(result);
// 	response.end();
// }).listen(8080);



var statija1 = {
	id: "1",
	title: "Naslov 1",
	content: "Content Content Content Content Content Content Content Content Content"
}
var statija2 = {
	id: "2",
	title: "Naslov 2",
	content: "4234234234tent Content2342342342"
}
var statija3 = {
	id: "3",
	title: "Naslov 3",
	content: "CoasgasgasgContent Conasgasgasgasgt Content Conteasgasgontent Content"
}
var statija4 = {
	id: "4",
	title: "Naslov 4",
	content: "ggggggggggContent Content Content Contaaaaaa Conffffft"
}

var statii = [];
statii.push(statija1);
statii.push(statija2);
statii.push(statija3);
statii.push(statija4);

http.createServer(function(request, response){
	if (request.url == "/statii"){
		var naslovi = "";
		statii.forEach(s =>{
			naslovi += s.title + "\n";
		});
	}
	response.write(naslovi);
	response.end();
}).listen(8080);