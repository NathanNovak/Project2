// $(document).ready(function() {
//   // Getting jQuery references to the post body, title, form, and author select
//   var beer = require("../../models/beer");
//   var users = require("../../models/users");
//   var rating = require("../../models/rating");
//   var beerName = $("#beerName");
//   var brewer = $("#brewer");
//   var IBU = $("#IBU");
//   // Adding an event listener for when the form is submitted
//   $(cmsForm).on("submit", handleFormSubmit);
//   // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
//   var url = window.location.search;
//   // Sets a flag for whether or not we're updating a post to be false initially
//   var updating = false;
//   var Op = Sequelize.Op;

//   // If we have this section in our url, we pull out the beer id from the url
//   if (url.indexOf("?beer=") !== -1) {
//     rating = url.split("=")[1];
//     getBeers(beerId, "beer");
//   }

//   // Getting the beers
//   getBeers();

//   // Gets post data for the current beer if we're editing
//   function getRatings(id, type) {
//     var queryUrl;
//     switch (type) {
//     case "top":
//     queryUrl = "/api/leaderboard/";
//       break;
//     case "new":
//       queryUrl = "/api/newest/";
//       break;
//     default:
//       return;
//     }
//     $.get(queryUrl, function(data) {
//       if (data) {
//         console.log(data.beerId || data.id);
//         // If this beer exists, prefill our cms forms with its data
//         beerName.val(data.beerName);
//         brewer.val(data.brewer);
//         IBU.val(data.IBU);
//         beerId = data.beerId || data.id;
//         // If we have a post with this id, set a flag for us to know to update the beer
//         // when we hit submit
//         order: sequelize.literal("max(rating) DESC");
//         updating = true;
//       }
//     });
//   }
// });

// exports.getTopBeers = function () {
//   return Beer.findAll({ 
//       // Ordering
//       order: [
//           ['rating', 'DESC'],
//       ],
//       attributes: ['beerName', 'brewer', 'ibu', 'rating', 'updated_at']
//   });
// };