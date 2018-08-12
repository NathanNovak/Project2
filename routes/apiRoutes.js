var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/Users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      var hbsObject = {
        // burgers:  [{burger_name: dbburgers}]
        Users: dbUsers
      };
      console.log("OBJECT IN Users GET", hbsObject);
      res.render("index", hbsObject);
      res.json(dbUsers);
    });
  });

  app.get("/api/Beer", function(req, res) {
    db.Beer.findAll({}).then(function(dbBeer) {
      var beerObject = {
        Beer: dbBeer
      };

      console.log("OBJECT IN Beer GET", beerObject);
      res.render("index", beerObject);
      res.json(dbBeer);
    });
  });

  // Create a new example
  app.post("/api/Users", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  app.post("/api/Rating", function(req, res) {
    console.log("REQ.BODY for Rating", req.body);

    db.Rating.create(req.body).then(function(dbRating) {
      res.json(dbRating);
    });
  });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
