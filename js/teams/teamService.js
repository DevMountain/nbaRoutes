var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){

	this.addNewGame = function (gameObj) {
		var URL = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
		if (parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
			gameObj.won = true;
		}
		else {
			gameObj.won = false;
		}

		return $http({
			method: 'POST',
			url: URL,
			data: gameObj
		});
	};	

	this.getTeamData = function(team) {
		var dfd = $q.defer();
		var URL = 'https://api.parse.com/1/classes/' + team;

		$http({
			method: 'GET',
			url: URL,
		}).then(function(data) {
			var results = data.data.results;
			var wins = 0, losses = 0;
			for (var i = 0; i < results.length; i++) {
				if(results[i].won) {
					wins++;
				}
				else {
					losses++;
				}
			};
			results.wins = wins;
			results.losses = losses;

			dfd.resolve(results);
		})

		return dfd.promise;
	}

});