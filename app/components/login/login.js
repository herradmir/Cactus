'use strict';

angular.module('CactusApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'components/login/login.html',
    controller: 'Login'
  });
}])

.controller('Login', function($scope) {
  $scope.userData = {
    name:'',
    password:''
  };
  $scope.firebaseUser= {
    name:'Admir',
    password:'password'
  };
// TODO get firebase service
// TODO get user input
  // TODO check user input with firebase data
    // if true move to userpage with userid
    // false show wrong password
});
