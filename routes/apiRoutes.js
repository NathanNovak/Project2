var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/Users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      var hbsObject = {
        // burgers:  [{burger_name: dbburgers}]
        Users: dbUsers
      };
      console.log("OBJECT IN GET", hbsObject);
      res.render("index", hbsObject);
      res.json(dbUsers);
    });
  });

  // Create a new example
  app.post("/api/Users", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
