var app = angular.module('nbaRoutes', ['ui.router']);

app.config(function ($stateProvider, $httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');

    //the students code below
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'js/home/homeTmpl.html',
            controller: 'homeCtrl'
        });
  
  
    //the students code above
});