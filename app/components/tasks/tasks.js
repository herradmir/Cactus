'use strict';

angular.module('CactusApp.tasks', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tasks', {
            templateUrl: 'components/tasks/tasks.html',
            controller: 'Tasks'
        });
    }])

    .controller('Tasks', function Tasks($scope, Auth, groupRef, $firebaseArray) {
        //var loggedIn = Auth.$getAuth();
        var loggedIn = '95b17b11-e3f7-43ff-87c0-d278f458e64c';
        var url = groupRef + '/' + loggedIn;
        //console.log(loggedIn.uid);
        var referenceToGroup = new Firebase(url)
        var list = $firebaseArray(referenceToGroup);
        list.$loaded()
            .then(function(x) {
                $scope.list = x;
            })
            .catch(function(error) {
                console.log("Error:", error);
            });
        console.log(list);
    });
