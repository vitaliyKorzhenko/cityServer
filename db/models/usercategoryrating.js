'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserCategoryRating = sequelize.define('UserCategoryRating', {
    rating: DataTypes.INTEGER
  }, {});
  UserCategoryRating.associate = function(models) {
    // associations can be defined here
  };
  return UserCategoryRating;
};