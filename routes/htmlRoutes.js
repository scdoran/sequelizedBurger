// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {

  	db.Burger.findAll({}).then(function(burgers){
		res.render("index", {burger: burgers});
	});
  });

  app.post("/", function(req, res){

  	var burger = req.body.burger_name;

	db.Burger.create({burger_name: burger, devoured: false}).then(function(burger){
		res.render("index", {burger:burger});
	});
});

// This is pointing to burger.js to updateOne, which will point to the ORM in order to update the data from the database based on the id of the button that was clicked on.
app.put("/:id", function(req, res){

	db.Burger.findById(req.params.id).then(burger=>{
		var devoured = req.body.devoured;

		burger.updateBurger(devoured).then(function(data){
			res.render("index", {burger:data});
		});
	});
});


};