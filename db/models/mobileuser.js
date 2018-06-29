'use strict';
module.exports = (sequelize, DataTypes) => {
  var MobileUser = sequelize.define('MobileUser', {
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN
  }, {});
  MobileUser.associate = function(models) {
    // associations can be defined here
  };
  return MobileUser;
};