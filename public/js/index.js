"use strict";

// Get references to page elements
var $nameText = $("#name-text");
var $ageText = $("#age-text");
var $emailText = $("#email-text");
var $beerSelect = $("#beer-select");
// var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
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
  }
  // getExamples: function () {
  //   return $.ajax({
  //     url: "api/Users",
  //     type: "GET"
  //   });
  // }
  // deleteExample: function(id) {
  //   return $.ajax({
  //     url: "api/examples/" + id,
  //     type: "DELETE"
  //   });
  // }
};

// refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   // API.getExamples().then(function (data) {
//   // var $a = $("<p>").text(UserInfo.name);
//   //   .attr("href", "/example/" + example.id);
//   $.ajax({
//     url: "api/Users",
//     type: "GET"
//   }).then(function(data) {
//     console.log("API GET", data);
//     var namesArr = [];
//     for (var i = 0; i < data.length; i++) {
//       console.log("Names:", data[i].name);
//       namesArr.push(data[i].name);
//     }
//     console.log(namesArr);

//     // res.render(namesArr);
//   });

//   // var names = Object.values(data)
//   // console.log("Data", names);

//   //  names = Object.values(data){
//   //   for (var name in names){
//   //     console.log(name);
//   //   }
//   // }
//   // var $li = $("<li>")
//   //   .attr({
//   //     class: "list-group-item",
//   //     "data-id": UserInfo.id
//   //   })
//   //   .append($a);
//   // console.log("$li", $li),
//   // var $button = $("<button>")
//   //   .addClass("btn btn-danger float-right delete")
//   //   .text("ｘ");

//   // $li.append($button);

//   // return $li;

//   // $nameList.empty();
//   // $nameList.append();
//   // });
// };
// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var UserInfo = {
    name: $nameText.val().trim(),
    age: $ageText.val().trim(),
    email: $emailText.val().trim(),
    beer: $beerSelect.val().trim()
  };

  console.log("UserInfo", UserInfo);
  if (!(UserInfo.name && UserInfo.age)) {
    alert("You must enter your name and age so we know you can be here!");
    return;
  }

  API.saveExample(UserInfo);
  // .then(function () {
  //   refreshExamples();
  // });

  // $nameText.val("");
  // $ageText.val("");
  // $emailText.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
// console.log($nameText, $ageText, $emailText);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
