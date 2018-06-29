'use strict';
module.exports = (sequelize, DataTypes) => {
  var History = sequelize.define('History', {
    user_id: DataTypes.INTEGER,
    action: DataTypes.STRING
  }, {});
  History.associate = function(models) {
    // associations can be defined here
  };
  return History;
};