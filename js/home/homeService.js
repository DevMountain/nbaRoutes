var app = angular.module('nbaRoutes');

app.service('homeService', function($http, $q, teamService){
  this.getAllData = function(){
    var deferred = $q.defer();
    var teamData = {};
    //look into $q.all for a cleaner way to resolve multiple promises in a row.
    teamService.getTeamData('utahjazz')
      .then(function(data){
        teamData['utahjazz'] = data;
        teamService.getTeamData('losangeleslakers')
          .then(function(data){
            teamData['losangeleslakers'] = data;
            teamService.getTeamData('miamiheat')
              .then(function(data){
                teamData['miamiheat'] = data;
                deferred.resolve(teamData);
              })
          })
      })
    return deferred.promise;
  }
});