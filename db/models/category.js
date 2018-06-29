'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};