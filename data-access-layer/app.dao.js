var db = require('../model/index');

var teamDao = require('./teams.dao')( db.sequelize.model('Teams') );

var data_access_object = { teamDao };

module.exports = data_access_object;