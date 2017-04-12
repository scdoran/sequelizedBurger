module.exports = function(sequelize, DataTypes){
// Creating a burger object containing all datatypes needed to create a table in MySQL.
	var Burger = sequelize.define("Burger", {
		burger_name: {type: DataTypes.STRING, allowNull: false},
		devoured: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}	
	});

	Burger.sync({force: true}).then(function(){
		return Burger.create(
			{
				burger_name: "Double Bacon Cheeseburger",
				devoured: false
			},
			{
				burger_name: "Turkey Burger",
				devoured: false
			}, 
			{
				burger_name: "Beefless Burger",
				devoured: false
			},
			{
				burger_name: "Goodburger",
				devoured: false
			}
		)
	});

	// Exporting burger to MySQL.
	return Burger;
}
