module.exports = function(sequelize, DataTypes){
// Creating a burger object containing all datatypes needed to create a table in MySQL.
	var Burger = sequelize.define("Burger", {
		burger_name: {type: DataTypes.STRING, allowNull: false},
		devoured: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}	
	});

	// Exporting burger to MySQL.
	return Burger;
};
