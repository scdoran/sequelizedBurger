// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");
var handlebars = require("express-handlebars");
var methodOverride = require("method-override");

// var PORT = 8000;
var app = express();
const PORT = process.env.PORT || 8000;

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
// app.use(methodOverride("_method"));

app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");


// Routes =============================================================

require("./routes/htmlRoutes.js")(app);
// require("./routes/burgers.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});