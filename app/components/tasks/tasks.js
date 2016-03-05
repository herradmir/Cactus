'use strict';

angular.module('CactusApp.tasks', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tasks', {
            templateUrl: 'components/tasks/tasks.html',
            controller: 'Tasks'
        });
    }])

    .controller('Tasks', function Tasks($scope, Auth, groupRef, groupList, $firebaseArray, $firebase) {

        var loggedIn = Auth.$getAuth();
        var referenceToGroup = new Firebase('https://cactus-app.firebaseio.com/Groups/' + loggedIn.uid)
        var taskList = $firebaseArray(referenceToGroup);
        taskList.$loaded().then(function () {
            angular.forEach(taskList, function (item) {
                $scope.taskList = item.taskList;
            });
        });

        $scope.user = {
            "userName": "Admir",
            "tasks": []
        };

        // sync when checkbox changes true or false
        $scope.sync = function (bool, task) {
            for (var i = 0; i < $scope.taskList.length; i++) {
                if ($scope.taskList[i].id == task.id) {
                    $scope.taskList[i].done = bool;
                }
            }
        }

        $scope.maybeAdd = function (bool, task) {
            if (bool) {
                for (var j = 0; j < $scope.taskList.length; j++) {
                    if ($scope.taskList[j].id == task.id) {
                        $scope.taskList[j].doneBy.push({
                            "user": $scope.user.userName,
                            "date": new Date().getTime()
                        });
                        $scope.user.tasks.push(task);
                    }
                }
            }
        };
    });
