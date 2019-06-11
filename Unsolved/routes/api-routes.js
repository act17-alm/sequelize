// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
      res.json(results);
    });
  }


  // POST route for saving a new todo. We can create a todo using the data on req.body


  // PUT route for updating todos. We can access the updated todo in req.body