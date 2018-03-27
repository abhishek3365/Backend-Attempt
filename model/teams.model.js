'use strict';
module.exports = (sequelize, DataTypes) => {
  var Team = sequelize.define('Teams', {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    stadium: DataTypes.STRING,
    crest: DataTypes.STRING,
    manager: DataTypes.STRING
  }, {});
  Team.associate = function(models) {
    // associations can be defined here
  };
  return Team;
};
