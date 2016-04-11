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

.controller('addTagsCtrl', function($scope, Tag) {
  Bcard.query().$promise.then(function(response){
    $scope.bcards = response;
  });
  Tag.query().$promise.then(function(response){
    $scope.tags = response;
  });
})

.controller('decksCtrl', function($scope, Deck) {
  Deck.query().$promise.then(function(response){
    $scope.decks = response;
  });
})

.controller('viewDeckCtrl', function($scope, Deck, Bcard) {
  Deck.query().$promise.then(function(response){
    $scope.decks = response;
  });
  Bcard.query().$promise.then(function(response){
    $scope.bcards = response;
  });
})

.controller('viewBusinessCardCtrl', function($scope, Bcard, Tag) {
  Bcard.query().$promise.then(function(response){
    $scope.bcards = response;
  });
  Tag.query().$promise.then(function(response){
    $scope.tags = response;
  });
})

.controller('myCardCtrl', function($scope, Bcard) {
  // Bcard.query().$promise.then(function(response){
  //   $scope.bcards = response;
  // });
  Bcard.get({id:"1"}).$promise.then(function(bcard, getResponseHeaders) {
    $scope.bcard = bcard;
    bcard.$save(function(bcard, putResponseHeaders) {
      //user => saved user object
      //putResponseHeaders => $http header getter
    });
  });
})

.controller('uploadImageCtrl', function($scope) {

})

.controller('eventCtrl', function($scope) {

})

.controller('studyCtrl', function($scope, Deck, Tagcard) {
  Deck.query().$promise.then(function(response){
    $scope.decks = response;
  });
  Tagcard.query().$promise.then(function(response){
    $scope.tagcards = response;
  });
})

.controller('eventSearchResultsCtrl', function($scope) {

})

.controller('studyDeckCtrl', function($scope, Deck, Tagcard, Bcard) {
  Deck.query().$promise.then(function(response){
    $scope.decks = response;
  });
  Tagcard.query().$promise.then(function(response){
    $scope.tagcards = response;
  });
  Bcard.query().$promise.then(function(response){
    $scope.bcards = response;
  });
})

.controller('studyResultsCtrl', function($scope) {

})

.controller('searchAttendeesCtrl', function($scope, Bcard) {
  Bcard.query().$promise.then(function(response){
    $scope.bcards = response;
  });
})
