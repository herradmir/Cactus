'use strict';

angular.module('CactusApp.menu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/menu', {
		templateUrl: 'components/menu/menu.html',
		controller: 'MenuController'
	});
}])

.controller('MenuController', function($scope, $location, $rootScope) {

});
