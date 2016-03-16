'use strict';

// Declare app level module which depends on views, and components
angular.module('CactusApp', [
  'ngRoute',
  'firebase',
  'CactusApp.Firebasefactories',
  'CactusApp.login',
  'CactusApp.overview',
  'CactusApp.createGroup',
  'CactusApp.createUser',
  'CactusApp.tasks',
  'CactusApp.menu'

])
.constant('FirebaseUrl', 'https://cactus-app.firebaseio.com/')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
