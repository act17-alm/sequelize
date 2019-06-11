// Dependencies
// =============================================================

// Sequelize (capital) references the standard library

// sequelize (lowercase) references my connection to the DB.
module.exports = (sequelize, datatypes) => {
    var Todo = sequelize.define("todo", {
        text: datatypes.STRING,
        complete: datatypes.BOOLEAN
      
      });

      return Todo
}


// Creates a "Book" model that matches up with DB


// Syncs with DB


// Makes the Book Model available for other files (will also create a table)

