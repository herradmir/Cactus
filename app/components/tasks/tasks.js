'use strict';

angular.module('CactusApp.tasks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks', {
    templateUrl: 'components/tasks/tasks.html',
    controller: 'Tasks'
  });
}])

.controller('Tasks', function($scope) {
  // group list

  $scope.taskList = [{
    "id": 1,
    "taskName": "vacuum",
    "done": false,
    "doneBy": [{
      "userName": "Admir",
      "tasks": []
    }],
  }, {
    "id": 2,
    "taskName": "do the dishes",
    "done": false,
    "doneBy": [{
      "user": "Julia",
      "date": 1456235821828
    }]
  }, {
    "id": 3,
    "taskName": "clean the bathroom",
    "done": false,
    "doneBy": [{
      "user": "Julia",
      "date": 1456235821828
    }],
  }, {
    "id": 4,
    "taskName": "do the laundry",
    "done": true,
    "doneBy": [{
      "user": "Julia",
      "date": 1456235821828
    }],
  }, {
    "id": 5,
    "taskName": "take out the garbage",
    "done": false,
    "doneBy": [{
      "user": "",
      "date": 1212312
    }],
  }, {
    "id": 6,
    "taskName": "cook dinner",
    "done": false,
    "doneBy": [{
      "user": "",
      "date": 12313
    }],
  }];

  // fake firebase användare ==> set user = 'julia';
  //user = logged in firebase user.profile
  $scope.user = {
    "userName": "Admir",
    "tasks": []
  };

  // sync when checkbox changes true or false
  $scope.sync = function(bool, task) {
    for (var i = 0; i < $scope.taskList.length; i++) {
      if ($scope.taskList[i].id == task.id) {
        $scope.taskList[i].done = bool;
        console.log($scope.taskList[i]);
      }
    }
  }



  // när man checkar i checkbox
  // add user to taskList doneBy taskList.doneBy = user
  // user.tasks.push(task)

  // för att visa gjorda task i profil
  // loopa taskList
  // hitta doneBy == user
  // user.tasks.push(task)
  $scope.maybeAdd = function(bool, task) {
    if (bool) {
      for (var j = 0; j < $scope.taskList.length; j++) {
        if ($scope.taskList[j].id == task.id) {
          $scope.taskList[j].doneBy.push({
            "user": $scope.user.userName,
            // "userTasks": $scope.user,
            "date": new Date().getTime()
          });
          $scope.user.tasks.push(task);
        }
      }


    }

  };


  // group taskList
  // TODO sync check/not checked from group list
  // sync list items to group list


});


// user tasks
// TODO if checked then add to user tasks
// TODO if not checked then remove from user tasks
