var appServices = require('../business-layer/app.services');

var teamController = require('./teams.controller')( appServices.teamServices );

var app_controller = { teamController };

module.exports = app_controller;