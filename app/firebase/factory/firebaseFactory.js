angular.module('CactusApp.Firebasefactories', ['firebase'])

.factory('ref', ['FirebaseUrl', function(FirebaseUrl) {
  var ref = new Firebase(FirebaseUrl);
  return (ref);
}])

.factory('userRef', ['$firebaseArray', 'FirebaseUrl', function($firebaseArray, FirebaseUrl) {
  var ref = new Firebase(FirebaseUrl + '/Users');
  return $firebaseArray(ref);
}])

.factory('groupRef', ['$firebaseArray', 'FirebaseUrl', function($firebaseArray, FirebaseUrl) {
  var ref = new Firebase(FirebaseUrl + '/Groups');
  return $firebaseArray(ref);
}])

.factory('Auth', ['$firebaseAuth', 'FirebaseUrl', function($firebaseAuth, FirebaseUrl) {
  var ref = new Firebase(FirebaseUrl);
  return $firebaseAuth(ref);
}])
