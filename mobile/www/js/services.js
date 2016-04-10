angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.factory('Bcard', function($resource) {
  return $resource("http://localhost:3000/bcards/:id.json");
})

.service('BlankService', [function(){

}]);
