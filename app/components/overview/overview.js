'use strict';

angular.module('CactusApp.overview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/overview', {
    templateUrl: 'components/overview/overview.html',
    controller: 'Overview'
  });
}])

.controller('Overview', function($scope) {

});
