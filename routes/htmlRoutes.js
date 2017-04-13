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

  // index route loads index.handlebars
  app.get("/", function(req, res) {

  	db.Burger.findAll({}).then(function(burgers){
		res.render("index", {burger: burgers});
	});
  });

  app.post("/", function(req, res){

  	var burger = req.body.burger_name;

	db.Burger.create({burger_name: burger}).then(function(burger){
		res.redirect("/");
	});
});

// This is directly pointing to MySQL by identifying the id of the burger that was clicked on 
// and then updating the devoured to being true or false.
app.put("/:id", function(req, res){

	var devoured = req.body.devoured;
	console.log("id: " + req.params.id + " devoured: " + devoured);
	
	// var condition = "id = " + req.params.id;

	// burger.updateOne({
	// 	devoured: req.body.devoured
	// }, condition, function(){
	// 	res.redirect("/");
	// });

	db.Burger.findOne({
		where: {
			id: req.params.id
		}
	}).then(burger=>{

		burger.update({devoured:devoured}).then(function(data){
			res.redirect("/");
		});
	});
});


};