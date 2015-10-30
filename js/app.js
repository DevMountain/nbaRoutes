var app = angular.module('nbaRoutes', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');

    //the students code below
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'js/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .state('teams', {
            url: '/teams/:team',
            templateUrl: 'js/teams/teamTmpl.html',
            controller: 'teamCtrl',
            resolve: {
                teamData: function (teamService) {
                    return teamService.getTeamData('miamiheat');
                }
            }
        });

    //the students code above
});
