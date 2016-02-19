'use strict';

angular.module('CactusApp.createGroup', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/creategroup', {
    templateUrl: 'components/createGroup/createGroup.html',
    controller: 'createGroup'
  });
}])

.controller('createGroup', function($scope) {

});
