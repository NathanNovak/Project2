var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      var namesArr = [];
      for (var i = 0; i < dbUsers.length; i++) {
        console.log("Names:", dbUsers[i].name);
        var names = dbUsers[i].name;
        namesArr.push({ name: names });
      }
      console.log(namesArr);
      var hbsObject = {
        Users: namesArr
      };

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
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
