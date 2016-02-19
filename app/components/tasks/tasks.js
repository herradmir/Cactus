angular.module('CactusApp.tasks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks', {
    templateUrl: 'components/tasks/tasks.html',
    controller: 'Tasks'
  });
}])


.controller('Tasks', function($scope) {

  $scope.taskList = [{
      "taskName": "vacuum",
      "done": false
    }, {
      "taskName": "do the dishes",
      "done": false
    }, {
      "taskName": "clean the bathroom",
      "done": false
    }, {
      "taskName": "do the laundry",
      "done": false
    }, {
      "taskName": "take out the garbage",
      "done": false
    }

  ];
  $scope.users = [
    {
        "userName": "Admir",
        "tasks": [
          {
          "taskName": "vacuum",
          "date": ["2016-01-01", "2016-02-01"]
          },
          {
          "taskName": "clean",
          "date": ["2016-01-01", "2016-02-01"]
          },
          {
          "taskName": "garbage",
          "date": ["2016-01-01", "2016-02-01"]
          },
      ]
  }
];
  //console.log($scope.users[0].tasks);
  console.log($scope.taskList[0]);


});





/*
Lista tasks förinställda - placeholder
Tasks ska tas från Firebase
Checkbox för gjorda tasks

*/
