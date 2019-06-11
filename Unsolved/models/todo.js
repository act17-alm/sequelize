// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var Todo = sequelize.define("todo", {
  text: Sequelize.STRING,
  complete: Sequelize.BOOLEAN

});

// Syncs with DB
Todo.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Todo;
