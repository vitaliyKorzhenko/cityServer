'use strict';
module.exports = (sequelize, DataTypes) => {
  var Institution = sequelize.define('Institution', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    iconUrl: DataTypes.STRING,
    backgroundUrl: DataTypes.STRING,
    lat: DataTypes.STRING,
    lon: DataTypes.STRING,
    lon: DataTypes.STRING,
  }, {});
  Institution.associate = function(models) {
    // associations can be defined here
  };
  return Institution;
};