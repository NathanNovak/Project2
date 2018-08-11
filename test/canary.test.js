var expect = require("chai").expect;
var request = require("request");

describe("canary test", function () {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  it("should pass this canary test", function () {
    expect(true).to.be.true;
  });
});

describe("api-route beer", function () {
  //test the beer API
  it("should return all beers in beers db", function () {
    request("http://localhost:8080/apiRoutes/beer", function (err, res, body) {
      expect(res.statusCode).to.be.equal(200);
    });
  });
  it("should display all the ratings", function () {
    request("http://localhost:8080/apiRoutes/ratings", function (err, res, body) {
      expect(res.statusCode).to.equal(200);
    });
  });
});

// console.log("this is the api route?" + app);