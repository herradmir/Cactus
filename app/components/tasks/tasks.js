'use strict';

angular.module('CactusApp.tasks', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tasks', {
            templateUrl: 'components/tasks/tasks.html',
            controller: 'Tasks'
        });
    }])

    .controller('Tasks', function Tasks($scope, Auth, groupRef, groupList, $firebaseArray, $firebaseObject) {
        var loggedIn = Auth.$getAuth();
        var referenceToGroup = new Firebase('https://cactus-app.firebaseio.com/Groups/' + loggedIn.uid)
        var groupList = $firebaseObject(referenceToGroup);

        groupList.$loaded().then(function () {
            groupList.$bindTo($scope, "data")
        });
    });
