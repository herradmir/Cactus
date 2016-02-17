'use strict';

angular.module('CactusApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'components/login/login.html',
    controller: 'Login'
  });
}])

.controller('Login', [function() {

}]);
