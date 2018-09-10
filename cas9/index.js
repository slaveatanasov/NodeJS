const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://admin:admin1@ds151282.mlab.com:51282/cas9";
var db;

const express = require("express");
const app = express();

const recipe = require("./recipe");

app.set("view engine", "ejs");
const bodyParser = require("body-parser"); 
app.use(bodyParser.urlencoded({extended: true}));
app.listen(8000);

mongoClient.connect(url, (err, client) =>{
	if(err) console.log(err);
	else{
		db = client.db("cas9");
		console.log("Connected");

//---------
		// var myObject = {
		// 	name: "Slave",
		// 	age: 28
		// };

		// // db.collection("test").insertOne(myObject, (err) =>{
		// // 	if (err) console.log(err);
		// // 	else {
		// // 		console.log("One object inserted in db");
		// // 	}
		// // });

		// //find document

		// db.collection("test").findOne({name: "Slave"}, (err, result) =>{
		// 	if (err) console.log(err);
		// 	else {
		// 		console.log(result);
		// 	}
		// });


		// //Update document
		// var changedObject ={
		// 	name: "Iva",
		// 	age: 30
		// }
		// var myquery = {name: "Slave"};
		// var newValues = {$set: changedObject};

		// db.collection("test").updateOne(myquery, newValues, (err) =>{
		// 	if (err) console.log(err);
		// 	else {
		// 		console.log("One document updated");
		// 	}
		// });
//-----------
		

	}
});

app.get("/newRecipe", (req, res) =>{
	res.render("newRecipe");
});

app.post("/newRecipe", (req, res) =>{
	let recName = req.body.recName;
	let ingredients = req.body.ingredients;
	let prepTime = req.body.prepTime;

	let r = new recipe.create(recName, ingredients, prepTime);
	console.log(r);

	db.collection("recipes").insertOne(r, (err) =>{
		if (err) console.log(err);
		else {
			console.log("new recipe added");
			res.render("allRecipes");
		}
	});
});

app.get("/allRecipes", (req, res) =>{
	db.collection("recipes").find({}).toArray((err, result) =>{
		res.render("allRecipes", {recipes: result});

	});
});