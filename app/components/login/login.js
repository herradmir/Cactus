'use strict';

angular.module('CactusApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'components/login/login.html',
		controller: 'Login'
	});
}])

.controller('Login', function($scope, $location, $rootScope) {
	$scope.userData = {
		name: '',
		password: ''
	};
	$scope.firebaseUser = {
		name: 'Admir',
		password: 'password'
	};

	$scope.loginForm = function() {
			var name = $scope.userData.name;
			var password = $scope.userData.password;
			if ($scope.userData.name == $scope.firebaseUser.name && $scope.userData.password == $scope.firebaseUser.password) { // test
				$rootScope.loggedUser = $scope.username;
				$location.path("/overview");
			} else {
				$scope.loginError = "Invalid user/pass.";
        console.log($scope.loginError);
			}
		}
	// TODO get firebase service
	// TODO get user input
	// TODO check user input with firebase data
	// if true move to userpage with userid
	// false show wrong password
});
