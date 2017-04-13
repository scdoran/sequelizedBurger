// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // index route loads index.handlebars
  app.get("/", function(req, res) {

  	db.burger.findAll({}).then(function(burgers){
		res.render("index", {burger: burgers});
	});
  });

  app.post("/", function(req, res){

  	var burger = req.body.burger_name;

	db.burger.create({burger_name: burger}).then(function(burger){
		res.redirect("/");
	});
});

// This is directly pointing to MySQL by identifying the id of the burger that was clicked on 
// and then updating the devoured to being true or false.
app.put("/:id", function(req, res){

	var devoured = req.body.devoured;
	console.log("id: " + req.params.id + " devoured: " + devoured);

	db.burger.update({devoured:devoured}, {
		where: {
			id: req.params.id
		}
	}).then(function(){
			res.redirect("/");
	});
});

app.delete("/:id", function(req, res){
	db.burger.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.redirect("/");
	});
});

};