var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function ($scope, $stateParams, teamData, teamService) {

    $scope.teamData = teamData;

    $scope.showNewGameForm = false;

    $scope.toggleNewGameForm = function () {
        $scope.showNewGameForm = !$scope.showNewGameForm;
    };

    if ($stateParams.team === 'utahjazz') {
        $scope.homeTeam = 'Utah Jazz';
        $scope.logoPath = 'images/jazz-logo.png';
    }
    else if ($stateParams.team === 'losangeleslakers') {
        $scope.homeTeam = 'Los Angeles Lakers';
        $scope.logoPath = 'images/lakers-logo.png';
    }
    else if ($stateParams.team === 'miamiheat') {
        $scope.homeTeam = 'Miami Heat';
        $scope.logoPath = 'images/heat-logo.png';
    }

    $scope.newGame = {};

    $scope.submitGame = function () {
        
        $scope.newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();
        $scope.newGame.opponent = $scope.opponent;
        $scope.newGame.homeTeamScore = $scope.homeTeamScore;
        $scope.newGame.opponentScore = $scope.opponentScore;
        teamService.addNewGame($scope.newGame)
            .then(function () {
                
                $scope.toggleNewGameForm();
                teamService.getTeamData($scope.newGame.homeTeam)
                    .then(function (data) {
                        
                        $scope.teamData = data;
                        $scope.newGame = {};
                    });
            });
    };


});