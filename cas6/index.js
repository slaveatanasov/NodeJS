var express = require("express");
var app = express();
var path = require("path"); //Used for getting absolute paths of project files.
var user = require("./user");
var article = require("./article");

app.set("view engine", "ejs");
app.listen(3000);

var user1 = new user.create("Petko", "Petkov", "petko@yahoo.com", "18");
var user2 = new user.create("Trajko", "Trajkov", "trajko@yahoo.com", "21");
var user3 = new user.create("Ana", "Anana", "ana@yahoo.com", "9");

var user_objects = [user1, user2, user3];

app.get("/", (req, res) =>{
	res.render("index");
});

app.get("/usersPage", (req, res) =>{
	var name = "Slave";
	res.render("usersPage", {firstName: name});
});

var users = ["Ana", "Sanja", "Marko", "Jana"];

app.get("/user", (req,res) =>{
	var name = req.query.name;

	user_objects.forEach(u =>{
		if (name == u.firstName){
			res.render("user", {user: u});
		}
	});

	// var user = users[id];
	// console.log(user);
	// res.render('user', {user: user1});
	res.render("errorPage");
});

var article1 = new article.create(1, "Example", "Example content");

app.get("/article", (req, res) =>{
	var ime = req.query.ime;
	if (ime == article.title){
		res.render("article", {a: article1});
	}
	res.render("errorPage");
})