var db = require("../models");

module.exports = function(app) {

  // --------------------------
  //         Users
  // --------------------------

  // Get all examples
  app.get("/api/beer", function(req, res) {
    db.beers.findAll({}).then(function(dbBeers) {
      var hbsObject = {
        Beers: dbBeers

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

  app.post("/api/Users", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // --------------------------
  //         Beer
  // --------------------------
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

  // --------------------------
  //         Rating
  // --------------------------
  app.get("/api/Rating", function(req, res) {
    db.Rating.findAll({}).then(function(dbRating) {
      res.json(dbRating);
    });
  });

  app.post("/api/Rating", function(req, res) {
    console.log("REQ.BODY for Rating", req.body);

    db.Rating.create(req.body).then(function(dbRating) {
      res.json(dbRating);
    });
  });

  app.get("/api/Rating/:BeerId", function(req, res) {
    var condition = "UserId = " + req.params.UsersId;
    console.log("condition", condition);

    db.Rating.findAll({
      where: {
        BeerId: req.params.BeerId
      }
    }).then(function(dbRating) {
      // console.log(dbRating);
      res.json(dbRating);
    });
  });

  // app.put("/api/Rating/:id", function(req, res){
  //   db.Rating.update({

  //   })
  // })
};
