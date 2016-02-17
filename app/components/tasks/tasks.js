angular.module('CactusApp.tasks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/taskView', {
    templateUrl: 'components/tasks/taskView.html',
    controller: 'taskView'
  });
}])

.controller('mainCtrl', function($scope){
  $scope.tasks = function(){
    console.log('hello');
  };

  $scope.chores = [
     {"name": "vacuum"},
     {"name": "do the dishes"},
     {"name": "clean the bathroom"},
     {"name": "do the laundry"},
     {"name": "take out the garbage"}

   ]

)};

.controller('actionCtrl', function($scope) {
  $scope.tasks = function(){
    console.log('hello2');
  }
});
