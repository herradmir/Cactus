'use strict';

angular.module('CactusApp.createGroup', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/creategroup', {
            templateUrl: 'components/createGroup/createGroup.html',
            controller: 'createGroup'
        });
    }])

    .controller('createGroup', function createGroup($scope, $firebaseAuth, $firebaseObject, $location, groupRef, Auth) {
        var loggedIn = Auth.$getAuth();
        $scope.createGroup = function createGroup() {
            var groupname = $scope.data.groupname;
            var referenceToGroup = new Firebase('https://cactus-app.firebaseio.com/Groups/' + loggedIn.uid)
            var loggedInUser = loggedIn.uid;
            addGroupToFirebase(groupname, loggedInUser);
            
            function addGroupToFirebase(groupname, loggedInUser) {

                referenceToGroup.push({
                    groupID: 1234,
                    name: groupname,
                    groupmembers: [
                        {
                            userID: 1234,
                            userName: loggedInUser
                        }
                    ],
                    taskList: [{
                        "id": 1,
                        "taskName": "vacuum",
                        "done": false
                    }, {
                            "id": 2,
                            "taskName": "do the dishes",
                            "done": false
                        }, {
                            "id": 3,
                            "taskName": "clean the bathroom",
                            "done": false
                        }, {
                            "id": 4,
                            "taskName": "do the laundry",
                            "done": false
                        }, {
                            "id": 5,
                            "taskName": "take out the garbage",
                            "done": false
                        }
                    ]
                });
                $location.path('/tasks');
            }

        }

    });