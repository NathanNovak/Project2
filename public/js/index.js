"use strict";

$(document).ready(function() {
  // Get references to page elements
  // var $ageText = $("#age-text");
  var $beerComment = $("#beer-comment");
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
      });
      // .then(function(data) {
      //   console.log("DATA From POST", data);
      // });
    },
    postRating: function(Rating) {
      return $.ajax({
        url: "api/Rating",
        type: "POST",
        data: Rating
      }).then(function(data) {
        console.log("DATA From Rating POST", data);
      });
    },
    getUsers: function() {
      return $.ajax({
        url: "api/Users",
        type: "GET"
      });
    },
    getOneUserByUsername: function(username) {
      return $.ajax({
        url: "api/Users/name/" + username,
        type: "GET"
      });
    }
  };

  // handleFormSubmit is called whenever we submit a new example
  // Save the new example to the db and refresh the list
  $("#myForm").on("submit", function(e) {
    e.preventDefault();
    handleFormSubmit(e);
  });

  // $("#save-rating").on("click", function() {
  //   API.getUsers().then(function(userInfo){

  //     console.log(userInfo);
  //     console.log($nameText.val());
  //     for (var i = 0; i < userInfo.length; i++){
  //       if (userInfo[i].username === $nameText.val()) {
  //         console.log(userInfo[i].id);
  //         var userId = userInfo[i].id;
  //       }
  //     }
  //     showRatingScale(userId);
  //   });
  // });

  var handleFormSubmit = function(event) {
    event.preventDefault();
    //gets a single user and checks to see if they are already in the DB. If they are then only Rating will post. If they are not then UsersInfo and Rating will post.
    API.getOneUserByUsername($nameText.val().trim()).then(function(singleUser) {
      console.log("JSON for username", singleUser);
      if (!singleUser) {
        var UserInfo = {
          username: $nameText.val().trim(),
          email: $emailText.val().trim()
        };
        console.log("UserInfo", UserInfo);

        //saves new user
        API.saveExample(UserInfo).then(function(data) {
          console.log("From SaveExample", data);
          setRating(data.id);
        });
      } else {
        if ($emailText.val() === singleUser.email) {
          console.log("Match");
          setRating(singleUser.id);
        } else {
          alert(
            $emailText.val() +
              " does not match the email on file for this username. Either pick a new username or enter the email associated with the current username."
          );
        }
      }
    });
    
  };

  //set the rating for new or existing user
  function setRating(userId) {
    var Rating = {
      rating: $beerRating.val(),
      comment: $beerComment.val(),
      UsersId: userId,
      BeerId: parseInt($beerSelect.val())
    };
    console.log("Rating", Rating);
    API.postRating(Rating).then(function(){
      location.reload();
    });

  }
  // function showRatingScale(userId) {
  //   console.log("In showRatings", userId);
  //   var Rating = {
  //     rating: $beerRating.val().trim(),
  //     BeerId: $beerSelect.val(),
  //     comment: $beerComment.val(),
  //     UsersId: 1
  //   };
  //   console.log("Rating", Rating);
  //   API.postRating(Rating);
  //   // location.reload();
  // }

  // Add event listeners to the submit and delete buttons
  // $submitBtn.on("click", handleFormSubmit);
  // $saveRating.on("click", ratingScale);
  // console.log($nameText, $ageText, $emailText);
  // $exampleList.on("click", ".delete", handleDeleteBtnClick);
});
