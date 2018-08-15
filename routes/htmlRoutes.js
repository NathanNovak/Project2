"use strict";

var db = require("../models");

module.exports = function (app) {
  // Load index page
// <<<<<<< leaderboard
//   app.get("/", function (req, res) {
//     db.Users.findAll({}).then(function (dbUsers) {
//       var namesArr = [];
//       for (var i = 0; i < dbUsers.length; i++) {
//         console.log("Names:", dbUsers[i].name);
//         var names = dbUsers[i].name;
//         namesArr.push({ name: names });
// =======
  app.get("/", function(req, res) {
    db.Beer.findAll({}).then(function(dbBeer) {
      var beerArr = [];
      for (var i = 0; i < dbBeer.length; i++) {
        // console.log("Beers:", dbBeer[i].beerName);
        var id = dbBeer[i].id;
        var beer = dbBeer[i].beerName;
        beerArr.push({
          id: id,
          beerName: beer
        });

      }
      console.log(beerArr);
      var beerhbsObject = {
        Beer: beerArr
      };
      // res.send(beerhbsObject);
      res.render("index", beerhbsObject);
      // db.Users.findAll({}).then(function(dbUsers) {
      //   var namesArr = [];
      //   for (var i = 0; i < dbUsers.length; i++) {
      //     console.log("Names:", dbUsers[i].name);
      //     var names = dbUsers[i].name;
      //     var beer = dbUsers[i].beer;
      //     namesArr.push({
      //       name: names,
      //       beer: beer
      //     });
      //   }
      //   console.log(namesArr);
      //   var hbsObject = {
      //     Users: namesArr
      //   };

      //   res.render("index", hbsObject);
      // });
    });
  });

  app.get("/top", function (req, res) {
    var daBeer = [
      {
        beerName: "Bud",
        brewery: "AB-Inbev-Something",
        ibu: 15,
        rating: 2,
        id: 1
      },
      {
        beerName: "Coors",
        brewery: "Coors",
        ibu: 3,
        rating: 1,
        id: 2
      }
    ];
    res.render("leaderboard", { daBeer: daBeer });
  });
};
// // Load example page and pass in an example by id
// app.get("/example/:id", function (req, res) {
//   db.Example.findOne({where: {id: req.params.id}}).then(function (
//     dbExample
//   ) {
//     res.render("example", {
//       example: dbExample
//     });
//   });
// });

// Render 404 page for any unmatched routes
// app.get("*", function (req, res) {
//   res.render("404");
// });

