# Project2: BeerMe! #

A beer app where the reviews and ratings are local to the bar you're in.

Click here to run: https://beer-me-an-app.herokuapp.com/

## How it works ##

Beer Me! keeps a MySQL database of beers and reviews for the location you're in. Currently, the program is defaulted to the west Tucson beer bar Tap & Bottle. To review a beer from the list, enter your name and email. Then select a beer and use the rating dropdown. You can enter a comment if you'd like. The most recent reviews are then displayed on the home page so you can see what people around you are drinking and what they think of the beers.

## Running it locally ##

To run Beer Me! on your machine, clone this respository to your computer and run the _beer_me_db.sql_ file in your MySQL client. If you want some beers in the database to get you started, you can also run the included seed.sql file.

Make sure your MySQL port is 3306 then open the folder in Node. Run _npm install_ to get the package.json and then run the app with the command _node server.js_.

Open the app at _localhost:8080_.
