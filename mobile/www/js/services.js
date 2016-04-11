angular.module('app.services', ['ngResource'])

.factory('BlankFactory', [function(){

}])

.factory('Bcard', function($resource) {
  return $resource("http://159.203.247.39/:3000/bcards/:id.json");
})

.factory('Tag', function($resource) {
  return $resource("http://159.203.247.39/:3000/tags/:id.json");
})

.factory('UserSession', function($resource) {
  alert("Factory");
  return $resource("http://159.203.247.39/:3000/users/sign_in.json");
})

.service('BlankService', [function(){

}]);
