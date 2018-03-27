module.exports = (app) => {

    var appController = require('../controller/app.controller');
  
    app.route('/team')
      .get(appController.teamController.getTeams);
  
  
}