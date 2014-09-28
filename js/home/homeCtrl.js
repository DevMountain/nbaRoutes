var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService, allData){
  $scope.jazzData = allData['utahjazz'];
  $scope.lakerData = allData['losangeleslakers'];
  $scope.heatData = allData['miamiheat'];
});