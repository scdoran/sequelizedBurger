'use strict'
var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes){
// Creating a burger object containing all datatypes needed to create a table in MySQL.
	var burger = sequelize.define("burger", {
		burger_name: {type: DataTypes.STRING, allowNull: false},
		devoured: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}	
	});

	// Exporting burger to MySQL.
	return burger;
};
