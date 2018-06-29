'use strict';
module.exports = (sequelize, DataTypes) => {
  var FullUser = sequelize.define('FullUser', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    birthday: DataTypes.STRING
  }, {});
  FullUser.associate = function(models) {
    // associations can be defined here
  };
  return FullUser;
};