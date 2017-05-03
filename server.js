// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var handlebars = require("express-handlebars");
var methodOverride = require("method-override");

// var PORT = 8000;
var app = express();
// const PORT = process.env.PORT || 8000;

var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));
app.use(express.static(path.join(__dirname, './public')));
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");


// Routes =============================================================

require("./controllers/burger-controller.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
  app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
	});
});