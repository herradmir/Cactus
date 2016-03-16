
angular.module('CactusApp.createUser', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: 'components/CreateUser/createUser.html',
            controller: 'createUser'
        });
    }])

    .controller('createUser', function($scope, $location, $rootScope, $firebaseAuth, $firebaseObject, $firebaseArray, userRef, ref) {

        $scope.createUser = function createUser() {
            var user = $scope.data;
            var userReference = new Firebase(userRef + '/' + user.username);
            var createUserNow = $firebaseArray(userReference);

            console.log(userReference.toString());
            if (user.password === user.reTypePassword) {
                userReference.createUser({
                    email: user.email,
                    password: user.password
                }, function(error, userData) {
                    if (error) {
                        console.log("Error creating user:", error);
                    } else {
                        console.log("Successfully created user account with uid:", userData.uid);
                        authenticate();
                    }
                });
                function authenticate() {
                    ref.authWithPassword({
                        email: user.email,
                        password: user.password
                    }, function(error, authData) {
                        if (error) {
                            console.log("Login Failed!", error);
                        } else {
                            console.log("Authenticated successfully with payload:", authData);
                            addUserToRecord();
                        }
                    });
                }

                function addUserToRecord() {
                    createUserNow.$add({
                        email: user.email,
                        username: user.username,
                        tasks: [''],
                        group: ['']
                    });
                    move();
                }
                function move() {
                    $location.path('/creategroup');
                }
            }
            else {
                //trow error on password match
                console.log('passwords dont match');
            }

        }


    });
