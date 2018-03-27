/****************************************************************************************
 *   This module is the starter module. It defines the configurations for Database           
 ****************************************************************************************/

'use strict';
const Service = require('./service');
const fs = require('fs');
const sysConfigJSON = JSON.parse(fs.readFileSync('appConfig.json', 'utf8'));

Service.start(sysConfigJSON);