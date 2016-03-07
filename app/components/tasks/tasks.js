'use strict';

angular.module('CactusApp.tasks', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tasks', {
            templateUrl: 'components/tasks/tasks.html',
            controller: 'Tasks'
        });
    }])

    .controller('Tasks', function Tasks($scope, Auth, groupList, $firebaseObject, $firebaseArray) {
        var loggedIn = Auth.$getAuth();
        var referenceToGroup = new Firebase('https://cactus-app.firebaseio.com/Groups/' + loggedIn.uid)
        var groupList = $firebaseObject(referenceToGroup);
        //var groupList = $firebaseArray(referenceToGroup);
        
        groupList.$loaded().then(function () {
            angular.forEach(groupList, function (item) {
                $scope.data = item.taskList;
            });
        }).catch(function (error) {
            console.log("Error:", error);
        });
        
        // three way binding
        groupList.$bindTo($scope, "data").then(function () {
        }).catch(function (error) {
            console.log("Error:", error);
        });
    });
