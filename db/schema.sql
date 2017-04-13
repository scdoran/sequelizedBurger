CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT PRIMARY KEY,
	burger_name VARCHAR(250),
	devoured BOOLEAN,
	date TIMESTAMP
);