module.exports =  ( teamServices )  => {
    
    var TeamController= {};
    
    TeamController.getTeams = ( req , res ) => {
        
        teamServices.getTeams().then( (teams) => {
            res.status(200).send( teams );
        } , ( err ) => {
            res.status(404).send( err );
        } ); 

    };

    return TeamController;

};