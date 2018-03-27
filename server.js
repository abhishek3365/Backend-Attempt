/****************************************************************************************
 *   This module is the starter module. It defines the configurations for Database           
 ****************************************************************************************/

// 'use strict';
// const Service = require('./service');
// const express = require('express');
// const fs = require('fs');
// const sysConfigJSON = JSON.parse(fs.readFileSync('appConfig.json', 'utf8'));

// Service.start(sysConfigJSON);

const express = require('express');
const bodyParser = require('body-parser');

var routes = require('./routes/app.router');

var port = process.env.PORT | 3000;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen( port , () => {
  console.log(`Server is up and running at port ` + port);
});