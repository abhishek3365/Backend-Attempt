const express = require('express');
const logger = require('./error-handling-logger/Logger');


module.exports.start = start;

/**
 * start the service
 * @param {Json} options sysConfigJSON
 */
function start(config) {
    logger.setConfig(config["logger-settings"]);
    manager.setConfig(config, config["environment-settings"].environment);
    startService(config);
};