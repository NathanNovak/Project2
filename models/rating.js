"use strict";

module.exports = function(sequelize, DataTypes) {
  var Rating = sequelize.define("Rating", {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING
    }
  });

  Rating.associate = function(models) {
    Rating.belongsTo(models.Beer, {
      as: "Beer",
      foreignKey: {
        allowNull: false
      }
    });
    Rating.belongsTo(models.Users, {
      as: "Users ",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Rating;
};
