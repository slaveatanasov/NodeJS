var sentence = "Ucime js";
var word = "js";
var word2 = "Ucime";

console.log(sentence.includes(word));
console.log(sentence.startsWith(word));

var myModule = require("./my-module");
var mathModule = require("./math-module");
var fs = require("fs");

// myModule.sayHello();
// console.log(mathModule.soberi(5, 3));

// var username = "IVA";
// var password = "1234";
// var email = "iva@yahoo.com";

// var validator = require("./validator");

// var passwordValidation = validator.validatePassword(password);
// var usernameValidation = validator.usernameToLowerCase(username);
// var emailValidation = validator.validateEmail(email);

// // if (emailValidation){
// // 	console.log("Vnesen e tocen email.");
// // } 
// // else {
// // 	console.log("Vnesen e pogresen email.");	
// // }

// // if (usernameValidation){
// // 	console.log("Vnesen e tocen username.");
// // } 
// // else {
// // 	console.log("Vnesen e pogresen username.");	
// // }

// // if (passwordValidation){
// // 	console.log("Vnesen e tocen password.");
// // } 
// // else {
// // 	console.log("Vnesen e pogresen password.");	
// // }

/// ---- ili 

// var emailMessage = validator.getEmailMessage(email);
// console.log(emailMessage);

// var passwordMessage = validator.getPasswordMessage(password);
// console.log(passwordMessage);

// var usernameMessage = validator.getUsernameMessage(username);
// console.log(usernameMessage);




//Rabota so fs modul:
fs.readFile("myFile.txt", "utf-8", (err, data) =>{
	if(err) throw err;

	else {
		console.log(data);
	}
})

fs.writeFile("myFile.txt", "Dodatok vo file.", (err) =>{
	if (err) throw err;
	console.log("Adddition to the file.");
})

fs.writeFile("myFile2.txt", "Pisuvam vo fajlot.", (err) =>{
	if (err) throw err;
	else {console.log("Uspesno zapisano.");
	}
})