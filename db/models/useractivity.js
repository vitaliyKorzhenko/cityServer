'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserActivity = sequelize.define('UserActivity', {
    login: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    uuid: DataTypes.STRING
  }, {});
  UserActivity.associate = function(models) {
    // associations can be defined here
  };
  return UserActivity;
};