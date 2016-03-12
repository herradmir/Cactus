'user strict'

angular.module('CactusApp.Firebasefactories', ['firebase'])

.factory('ref', ['FirebaseUrl', function(FirebaseUrl) {
  var ref = new Firebase(FirebaseUrl);
  return (ref);
}])

.factory('userRef', ['$firebaseArray', 'FirebaseUrl', function($firebaseArray, FirebaseUrl) {
  var ref = new Firebase(FirebaseUrl + '/Users');
  return (ref);
}])

.factory('groupList', ['$firebaseArray','$firebaseObject', 'FirebaseUrl', function($firebaseArray, $firebaseObject ,FirebaseUrl) {
  var ref = new Firebase(FirebaseUrl + '/Groups');
  return ($firebaseObject(ref));
}])

.factory('groupRef', ['$firebaseArray', 'FirebaseUrl', function($firebaseArray, FirebaseUrl) {
  var ref = new Firebase(FirebaseUrl + '/Groups');
  var groupList = new Firebase('https://cactus-app.firebaseio.com/Groups/')
  //return ($firebaseArray(ref));
  return (groupList)
}])

.factory('Auth', ['$firebaseAuth', 'FirebaseUrl', function($firebaseAuth, FirebaseUrl) {
  var ref = new Firebase(FirebaseUrl);
  return $firebaseAuth(ref);
}])
