'use strict';

angular.module('CactusApp.tasks', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tasks', {
            templateUrl: 'components/tasks/tasks.html',
            controller: 'Tasks'
        });
    }])

    .controller('Tasks', function Tasks($scope, Auth, groupRef, $firebaseArray) {
        var loggedIn = Auth.$getAuth();
        var url = groupRef + '/' + loggedIn.uid;

        var referenceToGroup = new Firebase(url);
        var arrayRef = $firebaseArray(referenceToGroup);

        arrayRef.$loaded()
            .then(function(x) {
                var taskList = new Firebase(groupRef + '/' + loggedIn.uid + '/' + arrayRef["0"].$id + '/taskList/')
                var arraylist = $firebaseArray(taskList);
                $scope.list = arraylist;
            })
            .catch(function(error) {
                console.log("Error:", error);
            });

        var task = function() {

        }
    });
