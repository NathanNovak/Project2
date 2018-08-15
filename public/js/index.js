"use strict";

$(document).ready(function() {
  // Get references to page elements
  var $ageText = $("#age-text");
  var $beerSelect = $("#beer-select");
  var $beerRating = $("#beer-rating");
  var $emailText = $("#email-text");
  var $nameText = $("#name-text");
  // var $submitBtn = $("#submit");
  // var $saveRating = $("#save-rating");

  // var $exampleDescription = $("#example-description");
  // var $nameList = $("#name-list");

  // The API object contains methods for each kind of request we'll make
  var API = {
    saveExample: function(UserInfo) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/Users",
        data: JSON.stringify(UserInfo)
      }).then(function(data) {
        console.log("DATA From POST", data);
      });
    },
    postRating: function(Rating) {
      $.ajax({
        url: "api/Rating",
        type: "POST",
        data: Rating
      }).then(function(ratingData) {
        console.log("DATA From Rating POST", ratingData);
      });
    }
  };

  // handleFormSubmit is called whenever we submit a new example
  // Save the new example to the db and refresh the list
  $("#myForm").on("submit", function(e) {
    e.preventDefault();
    handleFormSubmit(e);
    // console.log("test");
    // $('#myModal').modal('toggle')
  });

  $("#save-rating").on("click", function() {
    ratingScale();
  });

  var handleFormSubmit = function(event) {
    event.preventDefault();

    var UserInfo = {
      name: $nameText.val().trim(),
      age: $ageText.val().trim(),
      email: $emailText.val().trim(),
      BeerId: $beerSelect.val()
    };

    console.log("UserInfo", UserInfo);
    // if (!(UserInfo.name && UserInfo.age)) {
    //   alert("You must enter your name and age so we know you can be here!");
    //   return;
    // }

    API.saveExample(UserInfo);
    // .then(function () {
    //   refreshExamples();
    // });

    // $nameText.val("");
    // $ageText.val("");
    // $emailText.val("");
    // $beerSelect.val("");
  };

  function ratingScale() {
    // event.preventDefault();

    var Rating = {
      rating: $beerRating.val().trim(),
      BeerId: $beerSelect.val()
      // UsersId: ""
    };
    console.log(Rating.rating, "Rating");
    API.postRating(Rating);
    location.reload();
  }

  // Add event listeners to the submit and delete buttons
  // $submitBtn.on("click", handleFormSubmit);
  // $saveRating.on("click", ratingScale);
  // console.log($nameText, $ageText, $emailText);
  // $exampleList.on("click", ".delete", handleDeleteBtnClick);
});
