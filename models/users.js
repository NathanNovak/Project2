"use strict";

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    name: DataTypes.STRING,
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: 21
      }
    },
    email: DataTypes.STRING,
    comment: {
      type: DataTypes.TEXT,
      validate: {
        max: 140
      }
    },
    beer: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Users;
};
