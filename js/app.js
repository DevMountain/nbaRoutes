var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  $routeProvider
    .when('/', {
      templateUrl: 'js/home/homeTmpl.html',
      controller: 'homeCtrl',
      resolve: {
        allData: function($route, homeService){
          return homeService.getAllData();
        }
      }
    });
});