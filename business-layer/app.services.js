var dao = require('../data-access-layer/app.dao');

var teamServices = require('./team.services')( dao.teamDao );

var app_services = { teamServices };

module.exports = app_services;