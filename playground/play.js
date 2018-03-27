var dao = require('../data-access/data-access-layer');

dao.teamDao.getTeams().then( (teams) => {
    console.log(JSON.stringify(teams));
} );