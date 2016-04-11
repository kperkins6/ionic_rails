angular.module('app.controllers', ['app.services'])

.controller('scheduleEventCtrl', function($scope) {

})

.controller('myEventsCtrl', function($scope) {

})

.controller('nearMeCtrl', function($scope) {

})

// .controller('LoginCtrl', function($scope, $location, Auth) {
//   $scope.login = function() {
//     var credentials = {
//         email: 'user@domain.com',
//         password: 'password1'
//     };
//     var config = {
//         headers: {
//             'X-HTTP-Method-Override': 'POST'
//         }
//     };
//
//     Auth.login(credentials, config).then(function(user) {
//         console.log(user); // => {id: 1, ect: '...'}
//     }, function(error) {
//         alert("authentication failed");
//     });
//
//     $scope.$on('devise:login', function(event, currentUser) {
//         // after a login, a hard refresh, a new tab
//         $location.path('/page1/tab2/page3');
//     });
//
//     $scope.$on('devise:new-session', function(event, currentUser) {
//         // user logged in by Auth.login({...})
//         alert("authentication successful");
//
//     });
//   }
// });


.controller('LoginCtrl', function($scope, $location, UserSession, $ionicPopup, $rootScope) {
$scope.data = {};

$scope.login = function() {
  var user_session = new UserSession({ user: $scope.data });

  // user_session.$save(
  //   alert("Session Save");
  //   function(data){
  //     alert("Login data");
  //
  //     window.localStorage['userId'] = data.id;
  //     window.localStorage['userName'] = data.name;
  //     $location.path('/page1/tab2/page3');
  //   },
  //   function(err){
  //     alert("Error");
  //     var error = err["data"]["error"] || err.data.join('. ')
  //     var confirmPopup = $ionicPopup.alert({
  //       title: 'An error occured',
  //       template: error
  //     });
  //   }
  // );
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
  Tag.query().$promise.then(function(response){
    $scope.tags = response;
  });
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
  Bcard.query().$promise.then(function(response){
    $scope.bcards = response;
  });
})
