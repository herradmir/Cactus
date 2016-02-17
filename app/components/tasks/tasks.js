angular.module('CactusApp.tasks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks', {
    templateUrl: 'components/tasks/tasks.html',
    controller: 'Tasks'
  });
}])


.controller('Tasks', function($scope){

  $scope.taskList = [
     {"name": "vacuum"},
     {"name": "do the dishes"},
     {"name": "clean the bathroom"},
     {"name": "do the laundry"},
     {"name": "take out the garbage"}

   ];
 console.log($scope.taskList);

});
