'use strict';

angular.module('CactusApp.createUser', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'components/CreateUser/createUser.html',
    controller: 'createUser'
  });
}])

.controller('createUser', function($scope, $location, $rootScope, $firebaseAuth, $firebaseObject, userRef) {

  $scope.createUser = function createUser() {
    var user = $scope.data;
    var username = user.username;
    if (user.password === user.reTypePassword) {
      userRef.createUser({
        email: user.email,
        password: user.password
      }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
        }
      });
      userRef.push({
        email: user.email,
        username: username,
        tasks: [''],
        group: ['']
      });
      $location.path('/creategroup')
    }
		else{
			//trow error on password match
			console.log('passwords dont match');
		}

  }


});
