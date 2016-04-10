angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.factory('Bcard', function($resource) {
  return $resource("http://localhost:3000/bcards/:id.json");
})

.factory('UserSession', function($resource) {
  return $resource("http://localhost:3000/users/sign_in.json");
})

.service('BlankService', [function(){

}]);
