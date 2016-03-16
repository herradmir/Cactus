'use strict';

angular.module('CactusApp.tasks', ['ngRoute', 'firebase'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tasks', {
            templateUrl: 'components/tasks/tasks.html',
            controller: 'Tasks'
        });
    }])

    .controller('Tasks', function Tasks($scope, Auth, groupRef, $firebaseArray, $firebaseObject) {
        var loggedIn = Auth.$getAuth();

        loggedIn.uid = 'eb05aff5-2dda-4eac-8bcf-3e9255e596cb';
        var referenceToGroupId = new Firebase(groupRef + '/' + loggedIn.uid);
        var arrayRef = $firebaseArray(referenceToGroupId);



        this.watchForChange = function() {
            arrayRef.$watch(function(event) {
                this.getList();
            });
        };

        this.getList = function() {
            var arraylist;
            arrayRef.$loaded()
                .then(function() {
                    var taskListRef = new Firebase(groupRef + '/' + loggedIn.uid + '/' + arrayRef["0"].$id + '/taskList/')
                    var arraylist = $firebaseArray(taskListRef);
                    var objectList = $firebaseObject(taskListRef);

                    objectList.$bindTo($scope, "list").then(function() {
                        console.log('saved' );
                    }).catch(function(error) {
                        console.log('error', error);
                    });
                    
                })
                .catch(function(error) {
                    console.log("Error:", error);
                });
        }
        this.getList();
    });
