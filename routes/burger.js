// Requiring express and the burger.js files in order to route the html or user prompts to the ORM, then the database. 
var express = require("express");
var db = require("../models");

module.exports = function(app) {
// This is prompting the burger.js, which will point to the ORM in order to select all of the data from the database.
app.get("/", function(req, res){
	db.Burger.findAll({}).then(function(burgers){
		res.render("index", burgers);
	});
});
// This is pointing to burger.js to insertOne, which will point to the ORM in order to insert new data from the database.
app.post("/burger", function(req, res){
	db.Burger.create(req.body.burger_name).then(function(burger){
		res.json(burger);
	});
});
// This is pointing to burger.js to updateOne, which will point to the ORM in order to update the data from the database based on the id of the button that was clicked on.
app.put("/burger/:id", function(req, res){

	db.Burger.update(req.body.devoured, {
		where: {
			id: req.params.id
		}
	}).then(function(burger){
		res.json(burger);
	});
});

};