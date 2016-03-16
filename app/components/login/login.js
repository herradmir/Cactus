'use strict';

angular.module('CactusApp.login', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'components/login/login.html',
            controller: 'LoginController'
        });
    }])

    .controller('LoginController', function($scope, $location, $rootScope, $firebaseAuth, $firebaseObject, Auth) {
        $scope.location = $location
        Auth.$unauth();

        // logout 
        $scope.logout = function logout() {
            Auth.$unauth();
            console.log('logging out');
        };
        
        // login 
        $scope.loginForm = function login() {
            var userName = $scope.userData.name;
            var password = $scope.userData.password;

            Auth.$authWithPassword({
                email: userName,
                password: password
            }, function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                }
            });

            Auth.$onAuth(function(authData) {
                if (authData) {
                    console.log("Authenticated with uid:", authData.uid);
                    $location.path('/tasks');
                } else {
                    console.log("Client unauthenticated.")
                }
            });
        } // loginForm
    }); // module
