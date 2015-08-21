var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService, teamDataJazz, teamDataLakers, teamDataHeat){
	$scope.jazzData = teamDataJazz;
	$scope.lakersData = teamDataLakers;
	$scope.heatData = teamDataHeat;

	$scope.jazzData.logoPath = 'images/jazz-logo.png';
	$scope.lakersData.logoPath = 'images/lakers-logo.png';
	$scope.heatData.logoPath = 'images/heat-logo.png';

	// console.log($scope)

});
