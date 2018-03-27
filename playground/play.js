var appservices = require('../business-layer/app.services');

appservices.teamServices.getTeams().then( (teams) => {
    console.log(JSON.stringify(teams));
} );