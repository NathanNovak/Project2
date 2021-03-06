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

      db.Users.findAll({}).then(function(dbUsers) {
        var namesArr = [];
        for (var i = 0; i < dbUsers.length; i++) {
          // console.log("Names:", dbUsers[i]);
          var names = dbUsers[i].username;
          var id = dbUsers[i].id;
          // var beer = dbUsers[i].beer;
          namesArr.push({
            id: id,
            name: names
          });
        }


        db.Rating.findAll({}).then(function(dbRating) {
          var ratingArr = [];
          for (var i = 0; i < dbRating.length; i++) {
            // console.log("Names:", dbUsers[i]);
            var userId = dbRating[i].UsersId;
            var beerId = dbRating[i].BeerId;
            var comment = dbRating[i].comment;
            ratingArr.push({
              UsersId: userId,
              BeerId: beerId,
              comment: comment
            });
          }

          console.log(beerArr);
          console.log("------------------");
          console.log(namesArr);
          console.log("------------------");
          console.log(ratingArr);

          var output = [];
          for (var i = 0; i < ratingArr.length; i++) {
            // console.log("UserID in Rating", ratingArr[i].UsersId);
            
            output.push({
              userName: getUserName(ratingArr[i].UsersId, namesArr),
              beerName: getBeerName(ratingArr[i].BeerId, beerArr),
              comment: ratingArr[i].comment
            });
          }
          // console.log("UserID in output", output);
      
          // var hbsObject = {
          //   data: [{
          //     namesArr: names,
          //     ratingArr: comment,
          //     beerArr: beerId
          //     }
          //   ]
          // };
          var beerhbsObject = {
            Output: output,
            Beer: beerArr,
            Rating: ratingArr,
            Users: namesArr
          };
          res.render("index", beerhbsObject);
          // console.log("hbObject", hbsObject);
          // res.render("index", hbsObject);
        });
      });
    });
  });

  app.get("/top", function (req, res) {
    db.Beer.findAll({}).then(function(dbBeer) {
      var beerArr = [];
      for (var i = 0; i < dbBeer.length; i++) {
        console.log("Beers:", dbBeer[i]);
        var id = dbBeer[i].id;
        var beer = dbBeer[i].beerName;
        var brewer = dbBeer[i].brewer;
        var IBU = dbBeer[i].IBU;
        beerArr.push({
          id: id,
          beerName: beer,
          brewer: brewer,
          IBU: IBU
        });

      }

      db.Users.findAll({}).then(function(dbUsers) {
        var namesArr = [];
        for (var i = 0; i < dbUsers.length; i++) {
          // console.log("Names:", dbUsers[i]);
          var names = dbUsers[i].username;
          var id = dbUsers[i].id;
          // var beer = dbUsers[i].beer;
          namesArr.push({
            id: id,
            name: names
          });
        }


        db.Rating.findAll({}).then(function(dbRating) {
          var ratingArr = [];
          for (var i = 0; i < dbRating.length; i++) {
            // console.log("Names:", dbUsers[i]);
            var userId = dbRating[i].UsersId;
            var beerId = dbRating[i].BeerId;
            var comment = dbRating[i].comment;
            ratingArr.push({
              UsersId: userId,
              BeerId: beerId,
              comment: comment
            });
          }

          console.log(beerArr);
          console.log("------------------");
          console.log(namesArr);
          console.log("------------------");
          console.log(ratingArr);

          var output = [];
          for (var i = 0; i < ratingArr.length; i++) {
            // console.log("UserID in Rating", ratingArr[i].UsersId);
            
            output.push({
              userName: getUserName(ratingArr[i].UsersId, namesArr),
              beerName: getBeerName(ratingArr[i].BeerId, beerArr),
              comment: ratingArr[i].comment
            });
          }
          // console.log("UserID in output", output);
      
          // var hbsObject = {
          //   data: [{
          //     namesArr: names,
          //     ratingArr: comment,
          //     beerArr: beerId
          //     }
          //   ]
          // };
          console.log("BEERARRAY", beerArr);
          var leaderboard = {
            Output: output,
            Beer: beerArr,
            Rating: ratingArr,
            Users: namesArr
          };
          res.render("leaderboard", leaderboard);
          // console.log("hbObject", hbsObject);
          // res.render("index", hbsObject);
        });
      });
    });
  });

  app.get("/beers/:id", function(req, res){
    var beerArr = [];
    db.Beer.findAll({}).then(function(dbBeer) {
      for (var i = 0; i < dbBeer.length; i++) {
        // console.log(dbBeer[7√].id);
        var id = dbBeer[i].id;
        var beer = dbBeer[i].beerName;
        var brewer = dbBeer[i].brewer;
        var IBU = dbBeer[i].IBU;
        var desc = dbBeer[i].description;
        beerArr.push({
          id: id,
          beerName: beer,
          brewer: brewer,
          IBU: IBU,
          desc: desc
        });
      }
      var beerInfo = {
        name: beerArr[req.params.id - 1].beerName,
        brewer: beerArr[req.params.id - 1].brewer,
        ibu: beerArr[req.params.id - 1].IBU,
        description: beerArr[req.params.id - 1].desc
      };
      res.render("example", beerInfo);
    });
  });
};

function getUserName(usersId, names){
  for (var i = 0; i < names.length; i++){
    if (names[i].id === usersId){
      return names[i].name;
    }
  }
}

function getBeerName(beerId, beerName){
  for (var i = 0; i < beerName.length; i++){
    if (beerName[i].id === beerId){
      // console.log("ttt", beerName[i].beerName);
      return beerName[i].beerName;
    }
  }
}


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

