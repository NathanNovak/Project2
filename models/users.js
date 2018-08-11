module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    name: DataTypes.STRING,
    age: DataTypes.TEXT,
    email: DataTypes.STRING,
    comment: DataTypes.TEXT
  });

  return Users;
};
