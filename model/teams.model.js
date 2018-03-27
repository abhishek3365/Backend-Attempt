'use strict';
module.exports = (sequelize, DataTypes) => {
  var Team = sequelize.define('Teams', {
    id : { 
      type : DataTypes.INTEGER,
      primaryKey : true
    },
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    stadium: DataTypes.STRING,
    crest: DataTypes.STRING,
    manager: DataTypes.STRING
  }, {
    timestamps : false
  });
  Team.associate = function(models) {
    // associations can be defined here
  };
  return Team;
};
