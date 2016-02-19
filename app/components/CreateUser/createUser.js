'use strict';

angular.module('CactusApp.createUser', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/register', {
		templateUrl: 'components/CreateUser/createUser.html',
		controller: 'createUser'
	});
}])

.controller('createUser', function($scope, $location, $rootScope) {

});
