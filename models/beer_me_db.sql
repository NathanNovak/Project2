DROP DATABASE IF EXISTS Beer_Me_DB;
CREATE DATABASE Beer_Me_DB;

CREATE TABLE beerInfo
(
	id int NOT NULL AUTO_INCREMENT,
	beerName varchar(255) NOT NULL,
	brewer varchar(255) NOT NULL,
    IBU dec(10) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO beerInfo (brewer, beerName, IBU)
 VALUES ("Troegenator Double Bock", "Troegenator Brewing Company", 25); 

INSERT INTO beerInfo (brewer, beerName, IBU)
VALUES("St-Ambrose Oatmeal Stout","Brasseire McAuslan", 45);

INSERT INTO beerInfo (brewer, beerName, IBU)
VALUES ("Tequila  Barrel Lime Gose", "Boulevard Brewing Company", 15);

INSERT INTO beerInfo (brewer, beerName, IBU)
VALUES ("Yakima IPA", "Le Castor", 80);

INSERT INTO beerInfo (brewer, beerName, IBU)
VALUES ("Pliny the Elder","Russian River Brewing", 100);