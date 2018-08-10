module.exports = function(sequelize, DataTypes) {
  var Beer = sequelize.define("Beer", {
    beerName: DataTypes.STRING,
    brewer: DataTypes.STRING,
    IBU: DataTypes.DECIMAL
  });

  return Beer;
};