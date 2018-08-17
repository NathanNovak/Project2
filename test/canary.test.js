// var expect = require("chai").expect;
// var request = require("request");

// describe("canary test", function () {
//   // A "canary" test is one we set up to always pass
//   // This can help us ensure our testing suite is set up correctly before writing real tests
//   it("should pass this canary test", function () {
//     expect(true).to.be.true;
//   });
// });

// describe("api-route beer", function () {
//   //test the beer API
//   it("should return all beers in beers db", function () {
//     request("http://localhost:8080/api//beer", function (err, res, body) {
//       expect(res.statusCode).to.be.equal(200);
//     });
//   });
//   it("should display all the ratings", function () {
//     request("http://localhost:8080/api/Ratings", function (err, res, body) {
//       expect(res.statusCode).to.equal(200);
//     });
//   });
// });

// describe("GET /api/beers", function() {
//   // Before each test begins, create a new request server for testing
//   // & delete all examples from the db
//   beforeEach(function() {
//     request = chai.request(server);
//     return db.sequelize.sync({ force: true });
//   });

//   it("should find all examples", function(done) {
//     // Add some examples to the db to test with
//     db.Example.bulkCreate([
//       { text: "First Example", description: "First Description" },
//       { text: "Second Example", description: "Second Description" }
//     ]).then(function() {
//       // Request the route that returns all examples
//       request.get("/api/examples").end(function(err, res) {
//         var responseStatus = res.status;
//         var responseBody = res.body;

//         // Run assertions on the response

//         expect(err).to.be.null;

//         expect(responseStatus).to.equal(200);

//         expect(responseBody)
//           .to.be.an("array")
//           .that.has.lengthOf(2);

//         expect(responseBody[0])
//           .to.be.an("object")
//           .that.includes({ text: "First Example", description: "First Description" });

//         expect(responseBody[1])
//           .to.be.an("object")
//           .that.includes({ text: "Second Example", description: "Second Description" });

//         // The `done` function is used to end any asynchronous tests
//         done();
//       });
//     });
//   });
// });

// // console.log("this is the api route?" + app);