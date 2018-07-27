// console.log("Hello world.");

// var integer1 = 5;
// var integer2 = "10";
// var sum = integer1+integer2;

// console.log(integer1 + "+" + integer2 + "=" + sum);

// var name = "Slave";
// var pass = "0000";
// var nameUpdate = name.toLowerCase();

// if (nameUpdate == "slave"){
// 	console.log("Your name is "+name);
// }else{
// 	console.log("Not.");
// }

// if (name == "Slave" || name = "slave"){
// 	console.log("Hello " + name + ".")}
// 	else {
// 		console.log("Unsucessful.")
// 	}

// switch (name) {
// 	case "Slave": console.log("Your name is "+name);
// 	break;
// 	case "slave": console.log("Your name is "+name);
// 	break;
// 	default: console.log("Unsucessful");
// }

// var firstName = "Slave";
// var lastName = "Atanasov";

// var fullName = firstName.concat(lastName);
// console.log(fullName);

// var boolean = true;
// console.log(boolean);

// var integer = [3, 4, 5, 6, 7, 8, 9, 12];

// integer[100] = 50;
// console.log(integer);

// for (let i = 0; i < integer.length; i++){
//  console.log(integer[i] + ": ");
//  if(integer[i] % 3 == 0){
// 	console.log("Buzz");
// 	}
// 	if (integer[i] % 4 == 0){
// 		console.log("Fizz");
// 	}
// 	console.log("\n");
// }

// var brojac = 0;

// for (let i = 10; i > brojac; i--){
// 	console.log(i);
// }

// while (brojac < 10){
// 	brojac++;
// 	console.log(brojac);
// }

// do {brojac++;
// 	console.letog(brojac);
// } while (brojac < 10)

//homework: check if correct password, if not show message wrong password.

var names = ["Iva", "Ana", "Marija"];
var pass = ["a", "bb", "000"];
var myName = "Ana";
var myPass = "bb";

for(let i = 0; i < names.length; i++){
	if(names[i] == myName && pass[i] == myPass){
		console.log("logged in");
	}else{
		console.log("error");
	}
}