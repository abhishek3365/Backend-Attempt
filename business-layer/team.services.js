module.exports =  ( teamsDao )  => {
    
    var TeamService= {};
    
    TeamService.getTeams = () => {
        
        return new Promise( (resolve,reject) => {
            
            teamsDao.getTeams().then( (teams) => {
                resolve(teams);
            } , (error) => { 
                reject(error);
            }  );

        } );

    };

    return TeamService;

};