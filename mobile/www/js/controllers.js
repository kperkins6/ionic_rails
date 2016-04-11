angular.module('app.controllers', ['app.services'])

.controller('scheduleEventCtrl', function($scope) {

})

.controller('myEventsCtrl', function($scope) {

})

.controller('nearMeCtrl', function($scope) {

})

.controller('LoginCtrl', function($scope, $location, UserSession, $ionicPopup, $rootScope) {
$scope.data = {};

$scope.login = function() {
  var user_session = new UserSession({ user: $scope.data });
  alert("Login Function");

  user_session.$save(
    function(data){
      alert("Login data");

      window.localStorage['userId'] = data.id;
      window.localStorage['userName'] = data.name;
      $location.path('/page1/tab2/page3');
    },
    function(err){
      alert("Error");
      var error = err["data"]["error"] || err.data.join('. ')
      var confirmPopup = $ionicPopup.alert({
        title: 'An error occured',
        template: error
      });
    }
  );
}
})

.controller('signupCtrl', function($scope) {

})

.controller('searchBusinessCardsCtrl', function($scope, Bcard) {
  Bcard.query().$promise.then(function(response){
    $scope.bcards = response;
  });
})

.controller('addTagsCtrl', function($scope) {

})

.controller('decksCtrl', function($scope) {

})

.controller('viewDeckCtrl', function($scope) {

})

.controller('viewBusinessCardCtrl', function($scope) {

})

.controller('myCardCtrl', function($scope) {

})

.controller('uploadImageCtrl', function($scope) {

})

.controller('eventCtrl', function($scope) {

})

.controller('studyCtrl', function($scope) {

})

.controller('eventSearchResultsCtrl', function($scope) {

})

.controller('studyDeckCtrl', function($scope) {

})

.controller('studyResultsCtrl', function($scope) {

})

.controller('searchAttendeesCtrl', function($scope) {

})
