'use strict';

angular.module('CactusApp.tasks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks', {
    templateUrl: 'components/tasks/tasks.html',
    controller: 'Tasks'
  });
}])


.controller('Tasks', function($scope) {

  $scope.taskList = [{
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
    }, {
      "id": 6,
      "taskName": "cook dinner",
      "done": false
    }

  ];



  $scope.users = [{
    "userName": "Admir",
    "tasks": [{}]
  }, {
    "userName": "Julia",
    "tasks": []
  }];





/*
  $scope.ifTrueAdd = function(clickedTask) {
    var id = clickedTask.id;
    console.log($scope.users[0].tasks);
    console.log(id);
    var loggedInUser = $scope.users[0];
    // console.log(loggedInUser.tasks);
    loggedInUser.tasks.forEach(function(userTask) {
      if (clickedTask.done && id !== userTask.id) {
        // console.log('not in list');
        loggedInUser.tasks.push(clickedTask);
        console.log('pushed');
      }
      else{
        console.log('is in list');
      }
    })
    console.log(loggedInUser.tasks);
  };
  */
});





/*
Lista tasks förinställda - placeholder
Tasks ska tas från Firebase
Checkbox för gjorda tasks

*/
