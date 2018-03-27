module.exports =  ( teamsModel )  => {
    
    var TeamDao= {};
    
    TeamDao.getTeams = () => {
        
        return new Promise( (resolve,reject) => {
            teamsModel.findAll().then( (teams) => {
                resolve(teams);
            } , (error) => {
                reject ( 'could not fetch teams' ); 
            });
        } );

    };

    return TeamDao;

};