'use strict';

// Declare app level module which depends on views, and components
angular.module('CactusApp', [
  'ngRoute',
  'CactusApp.login',
  'CactusApp.overview',
  'CactusApp.createGroup',
  'CactusApp.createUser',
  'CactusApp.tasks'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
