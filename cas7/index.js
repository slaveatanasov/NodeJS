var express = require("express");
var app = express();
var user = require("./user");

app.set("view engine", "ejs");

var myParser = require("body-parser"); //To be able to work with POST parameters (body of the request) use the 2 lines below:
app.use(myParser.urlencoded({extended: true}));

var korisnici = [];
app.listen(8000);

app.get("/", (req, res) =>{
	var name = "Slave";
	res.render("index", {myName: name});
});

app.get("/register", (req, res) =>{
	res.render("register");
})

app.post("/register", (req, res) =>{
	var fname = req.body.firstName;
	var lname = req.body.lastName;
	var email = req.body.email;
	var pass = req.body.pass1;
	var passConfirm = req.body.pass2;

	if (pass == passConfirm){
		var korisnik = new user.create(fname, lname, email, pass);
		korisnici.push(korisnik);
	}
	else{
		res.render("register");
	}

	// console.log(fname+" "+lname+" "+email+" "+pass+" "+passConfirm);
	console.log(korisnici);
	res.render("login");
});

app.get("/login", (req, res) =>{
	res.render("login");
});

app.post("/login", (req, res) =>{
	var email = req.body.email;
	var pass = req.body.pass;
	console.log(email + " "+ pass);

	korisnici.forEach(k =>{
		if(k.email == email && k.pass == pass){
			res.send("Sucessfull login.");
		}
	});
		res.render("login");
});

app.get("/users", (req, res) =>{
	res.render("users", {users : korisnici});
});