var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/Users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      var hbsObject = {
        Users: dbUsers
      };
      console.log("OBJECT IN Users GET", hbsObject);

      res.json(dbUsers);
      // res.render("index", hbsObject);
    });
  });

  app.get("/api/Users/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    db.Users.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  app.get("/api/Users/name/:username", function(req, res) {
    var condition = "username = " + req.params.username;
    console.log("condition", condition);

    db.Users.findOne({
      where: {
        username: req.params.username
      }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  app.get("/api/Beer", function(req, res) {
    db.Beer.findAll({}).then(function(dbBeer) {
      var beerObject = {
        Beer: dbBeer
      };

      console.log("OBJECT IN Beer GET", beerObject);
      // res.render("index", beerObject);
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
