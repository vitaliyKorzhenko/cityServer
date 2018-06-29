'use strict';
module.exports = (sequelize, DataTypes) => {
  var Discount = sequelize.define('Discount', {
    tittle: DataTypes.STRING
  }, {});
  Discount.associate = function(models) {
    // associations can be defined here
  };
  return Discount;
};