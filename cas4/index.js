var http = require("http");
var url = require("url");

// http.createServer(function(req, res){
// 	console.log("online");
// 	res.writeHead(200, "OK");
// 	res.write("Zdravo");
// 	res.end();
// }).listen(3000);


// http.createServer(function(request, response){
// console.log(request.url);
// if(request.url == "/users"){
// 	response.writeHead(200, "OK");
// 	response.write("Users page");
// 	response.end();
// }
// else if(request.url == "/messages"){
// 	response.writeHead(200, "OK");
// 	response.write("Messages page");
// 	response.end();
// }
// else{
// 	response.writeHead(404, "Not found");
// 	response.write("Page not found");
// 	response.end();
// }

// }).listen(3000);

http.createServer(function(request, response){

	var q1 = url.parse(request.url, true).query;

	response.writeHead(200, "OK");
	var res = q1.name + " ";
	response.write(request.url);
	response.end();
}).listen(3000);