angular.module('app.controllers', ['app.services'])

.controller('scheduleEventCtrl', function($scope) {

})

.controller('myEventsCtrl', function($scope) {
  // $window.open('url', '_self')
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


.controller('LoginCtrl', function($scope, $location, UserSession, $ionicPopup, $rootScope, $ionicHistory, $ionicSideMenuDelegate, $state) {
$scope.data = {};


$scope.$on('$ionicView.enter', function(){
    $ionicSideMenuDelegate.canDragContent(false);
    $ionicHistory.clearHistory();
    $ionicHistory.clearCache();
  });
$scope.$on('$ionicView.leave', function(){
    $ionicSideMenuDelegate.canDragContent(true);
  });
$scope.login = function() {
  var user_session = new UserSession({ user: $scope.data });
  // var user_session = new UserSession({ email: data.email, password: data.password });

  // window.localStorage['userId'] = data.id;
  // window.localStorage['userName'] = data.name;
  // user_session.$save()
  // alert(data.email);
  // alert(data.password);
  user_session.$save(
    function(data){
      window.localStorage['userId'] = data.id;
      window.localStorage['userName'] = data.name;
      var confirmPopup = $ionicPopup.alert({
        title: 'Login Successful!',
        template: 'Success!'
      });
      $state.go('myCard');
      window.location.reload();

      // $ionicHistory.clearHistory();
      // $scope.openPage('/page1/tab2/page3');
      // $location.path('/page1/tab2/page3');
    },
    function(err){
      var error = err["data"]["error"] || err.data.join('. ')
      var confirmPopup = $ionicPopup.alert({
        title: 'An error occured',
        template: error
      });
    }
  );
  // window.location.reload();
  $scope.openPage = function (pageName) {
      window.location = '#' + pageName;
      window.location.reload();
  };
}
})

.controller('signupCtrl', function($scope, $location, UserSession, $ionicPopup, $rootScope, NewUser, $ionicHistory) {
  $scope.data = {};
  $scope.$on('$ionicView.enter', function(){
      $ionicSideMenuDelegate.canDragContent(false);
      // $ionicHistory.clearHistory();
      // $ionicHistory.clearCache();
    });
  $scope.$on('$ionicView.leave', function(){
      $ionicSideMenuDelegate.canDragContent(true);
    });
  $scope.sign_up = function() {
    var new_user = new NewUser({user: $scope.data});
    new_user.$save(
      function(data){
        window.localStorage['userId'] = data.id;
        window.localStorage['userName'] = data.name;
        var confirmPopup = $ionicPopup.alert({
          title: 'Sign_Up Successful!',
          template: 'Success!'
        });
        $scope.openPage('/page1/tab2/page3');
        // $location.path('/page1/tab2/page3');
      },
      function(err){
        var error = err["data"]["error"] || err.data.join('. ')
        var confirmPopup = $ionicPopup.alert({
          title: 'An error occured',
          template: error
        });
      }
    );
    // var user_session = new UserSession({ user: $scope.data });
    // user_session.$save(
    //   function(data){
    //     window.localStorage['userId'] = data.id;
    //     window.localStorage['userName'] = data.name;
    //     var confirmPopup = $ionicPopup.alert({
    //       title: 'Login Successful!',
    //       template: 'Success!'
    //     });
    //     $scope.openPage('/page1/tab2/page3');
    //     // $location.path('/page1/tab2/page3');
    //   },
    //   function(err){
    //     var error = err["data"]["error"] || err.data.join('. ')
    //     var confirmPopup = $ionicPopup.alert({
    //       title: 'An error occured',
    //       template: error
    //     });
    //   }
    // );
    // window.location.reload();
    $scope.openPage = function (pageName) {
        window.location = '#' + pageName;
        // window.location.reload();
    };
  }
})

.controller('signoutCtrl', function($scope, $location, UserSession, $ionicPopup, $rootScope, $ionicHistory) {
  $scope.$on('$ionicView.enter', function(){
    $ionicSideMenuDelegate.canDragContent(false);
    window.localStorage.clear();
    // alert("Storage Cleared");
    $ionicHistory.clearCache();
    // alert("Cache Cleared");
    $ionicHistory.clearHistory();
  });
  $scope.$on('$ionicView.leave', function(){
    $ionicSideMenuDelegate.canDragContent(true);
    alert("Sign Out Successful");
  });
  // var session = UserSession.get({userId: window.localStorage['userId']});

  // UserSession.delete(session);
  // if ( session == 'undefined'){
  //   $location.path('/login');
  //   window.location.reload();
  // }
  // else {
  // $http.get('http://159.203.247.39:3000/users/sign_out', {
  // // auth_token: session.userId // just a cookie storing my token from devise token authentication.
  //
  // }).success( function(result) {
  //   // $cookieStore.remove('_pf_session');
  //   // $cookieStore.remove('_pf_name');
  //   // $cookieStore.remove('_pf_email');
  //   alert("Sign Out Successfull");
  //   location.reload(true); // I need to refresh the page to update cookies
  // }).error( function(result) {
  //   console.log(result);
  // });
  // }

  // $location.path('/login');
  // window.location.reload();
})

.controller('searchBusinessCardsCtrl', function($scope, Deck, Bcard, Tagcard, $rootScope, current_focus, $state) {
  $scope.$on('$ionicView.enter', function(){
    // window.location.reload();
    // $ionicSideMenuDelegate.canDragContent(false);
    // window.localStorage.clear();
    // // alert("Storage Cleared");
    $ionicHistory.clearCache();
    // // alert("Cache Cleared");
    $ionicHistory.clearHistory();
  });

  Tagcard.query().$promise.then(function(response){
    $scope.tagcards=[]
    angular.forEach(response, function(tagcard){
      if(tagcard.user_id == window.localStorage['userId']) {
        $scope.tagcards.push(tagcard);
      }
    });
    return $scope.tagcards;
  });
  Bcard.query().$promise.then(function(response){
    $scope.bcards=[]
    angular.forEach($scope.tagcards, function(tagcard){
      angular.forEach(response, function(bcard){
      if(tagcard.bcard_id == bcard.id && !$scope.bcards.includes(bcard)) {
          $scope.bcards.push(bcard);
        }
      });
    });
    return $scope.bcards;
  });
  // window.location.reload();

  $scope.click_card = function(card) {
    // alert(card.id);
    current_focus.setCard(card.id);
    $state.go('viewBusinessCard');
  }
  $scope.orderProp = 'name';
 // $scope.reload = function() {
 //   window.location.reload();
 // }
})

.controller('addTagsCtrl', function($scope, Bcard, UserSession, Tag, Tagcard, current_focus, $location, $ionicPopup, $rootScope, $http) {
  $scope.newTag = {};
  Bcard.get({id: current_focus.getCard()}).$promise.then(function(bcard) {
    $scope.bcard = bcard;
    // alert($scope.bcard.id);

  // alert(user_card);

  $scope.suggested_tags = Tag.query();
  Tagcard.query().$promise.then(function(response){
    $scope.tag_ids = []
    $scope.tags = [];
    angular.forEach(response, function(tagcard){
      if ($scope.bcard.id == tagcard.bcard_id && tagcard.user_id == window.localStorage['userId']) {
        $scope.tag_ids.push(tagcard.tags);
        $scope.tagcard = tagcard;
      }
    });
    var myarray = $scope.tag_ids[0];
    angular.forEach($scope.tag_ids, function(tag_list){
      angular.forEach(tag_list, function(tag_id){
        Tag.get({id: tag_id}).$promise.then(function(tag) {
          $scope.tags.push(tag);
        });
      });
    });
  });
  });
  $scope.orderProp = 'hits';
  $scope.quantity = "10";

  $scope.add_tag = function(tag) {
    $scope.tagcard.tags.push(tag);
    $scope.tagcard = Tagcard.update($scope.tagcard);
    $scope.tags.push(tag);
  }

  $scope.create_tag = function() {
    // var oldTag = Tag.get({text: $scope.newTag.text}).$promise.then(function(tag) {
    //   alert("Exists");
    //   $scope.tagcard.tags.push(tag.id);
    //   $scope.tagcard = Tagcard.update($scope.tagcard);
    //   $scope.tags.push(tag);
    // });
    // if (oldtag != undefined) {
      var new_tag= new Tag({ text: $scope.newTag.text, hits: "1" });

      new_tag.$save(
        function(newTag){
          var confirmPopup = $ionicPopup.alert({
            title: 'Tag Successful!',
            template: 'Success!'
          });
          $scope.tagcard.tags.push(newTag.id);
            // alert($scope.tagcard.tags);
          $scope.tagcard = Tagcard.update($scope.tagcard);
            // alert("Tagcard Updated");
          $scope.tags.push(newTag);
            // alert("View Updated");
        },
        function(err){
          var error = err["data"]["error"] || err.data.join('. ')
          var confirmPopup = $ionicPopup.alert({
            title: 'An error occured',
            template: error
          });
        }
      );
      // }
  }

})

.controller('decksCtrl', function($scope, Deck, $rootScope, current_focus) {
  // if(UserSession.get({userId: window.localStorage['userId']}) == 'undefined'){
  //   alert("Please log in to continue");
  //   $location.path('/login');
  //   // window.location.reload();
  // }
  // else {
  $scope.newDeck = {};
  $scope.decks=[];

    Deck.query().$promise.then(function(response){
      angular.forEach(response, function(deck){
        if(deck.user_id==window.localStorage['userId']) {
          $scope.decks.push(deck);
        }
      });
      return $scope.decks;
    });
    // }
    $scope.click_deck = function(deck) {
      // alert(deck.id);
      current_focus.setDeck(deck.id);
    }

    $scope.create_deck = function() {
      var new_deck= new Deck({ name: $scope.newDeck.name, description: $scope.newDeck.description, user_id: window.localStorage['userId']});
      alert("Deck Created!");
      // $scope.decks.push(newDeck);

      new_deck.$save(
        function(newDeck){
          var confirmPopup = $ionicPopup.alert({
            title: 'Deck Successful!',
            template: 'Success!'
          });
        },
        function(err){
          var error = err["data"]["error"] || err.data.join('. ')
          var confirmPopup = $ionicPopup.alert({
            title: 'An error occured',
            template: error
          });
        }
      );
      window.location.reload();
    }
})

.controller('viewDeckCtrl', function($scope, Deck, Bcard, Tagcard, $rootScope, current_focus) {
  // if (UserSession.get({userId: window.localStorage['userId']}) == 'undefined'){
  //   $location.path('/login');
  //   alert("Please log in to continue");
  //   // window.location.reload();
  // }
  // else {
  // alert(current_focus.getDeck());
  Deck.get({id: current_focus.getDeck()}).$promise.then(function(deck) {
    $scope.deck = deck;
  });
  Tagcard.query().$promise.then(function(response){
    $scope.tagcards=[]
    angular.forEach(response, function(tagcard){
      // if(tagcard.id in deck.tagcards) {
      if($scope.deck.tagcards.includes(tagcard.id)) {
        $scope.tagcards.push(tagcard);
      }
    });
    return $scope.tagcards;
  });
  Bcard.query().$promise.then(function(response){
    $scope.bcards=[]
    angular.forEach($scope.tagcards, function(tagcard){
      angular.forEach(response, function(bcard){
      if(tagcard.bcard_id == bcard.id) {
          $scope.bcards.push(bcard);
        }
      });
    });
    return $scope.bcards;
  });
  // current_focus.setDeck($scope.deck.id);

// }
  $scope.click_card = function(card) {
    // alert(card.id);
    current_focus.setCard(card.id);
  }
})

.controller('addBusinessCardsCtrl', function($scope, Deck, Bcard, Tagcard, $rootScope, current_focus) {
  Deck.get({id: current_focus.getDeck()}).$promise.then(function(deck) {
    $scope.deck = deck;
    // alert($scope.deck.id);
  });
  Tagcard.query().$promise.then(function(response){
    $scope.tagcards=[]
    angular.forEach(response, function(tagcard){
      if(tagcard.user_id == window.localStorage['userId']) {
        $scope.tagcards.push(tagcard);
      }
    });
    return $scope.tagcards;
  });
  $scope.bcards = [];
  Bcard.query().$promise.then(function(response){
    $scope.bcards= response;
    // angular.forEach($scope.tagcards, function(tagcard){
    //   angular.forEach(response, function(bcard){
    //   if(tagcard.bcard_id == bcard.id && !$scope.bcards.includes(bcard)) {
    //       $scope.bcards.push(bcard);
    //     }
    //   });
    // });
    // return $scope.bcards;
  });

  $scope.click_card = function(card) {
    // alert(card.id);

    // var deck = current_focus.getDeck();
    var tCard = {};
    tCard.id = "-1";

      Tagcard.query().$promise.then(function(response){
        $scope.tagcards=[];
        angular.forEach(response, function(tagcard){
          if(card.id == tagcard.bcard_id && tagcard.user_id == window.localStorage['userId']) {
            // $scope.tagcards.push(tagcard);
            // alert(tagcard.id);
            tCard.id = tagcard.id;
          }
        });
        // return $scope.tagcards;
      // });

      // Deck.get({id: current_focus.getDeck()}).$promise.then(function(deck) {
      //   $scope.deck = deck;
      // });
      if (tCard.id >= "0") {
        // alert($scope.deck.id);
        var index = $scope.deck.tagcards.indexOf(tCard.id);
        // alert("Index");
        if (index >= "0") {
          alert(index);
        } else {
          $scope.deck.tagcards.push(tCard.id);
          Deck.update($scope.deck);
          // alert("Deck Updated!");
          window.location.reload();
        }
      } else {
        // alert("Unset Tag Card");

        var new_tagcard= new Tagcard({user_id: window.localStorage['userId'], bcard_id: card.id});

        new_tagcard.$save(
          function(newTagcard){
            var confirmPopup = $ionicPopup.alert({
              title: 'Tag Successful!',
              template: 'Success!'
            });
            // $scope.tagcard.tags.push(newTagcard.id);
            //   alert($scope.tagcard.tags);
            // $scope.tagcard = Tagcard.update($scope.tagcard);
            //   alert("Tagcard Updated");
            // $scope.tags.push(newTag);
            //   alert("View Updated");
          },
          function(err){
            var error = err["data"]["error"] || err.data.join('. ')
            var confirmPopup = $ionicPopup.alert({
              title: 'An error occured',
              template: error
            });
          }
        );

      }
      // alert("After Loopa");
    });
  }
  $scope.orderProp = 'name';
  $scope.quantity = "10";

})

.controller('viewBusinessCardCtrl', function($scope, Bcard, UserSession, Tag, Tagcard, current_focus, $ionicPopup) {
  // if (UserSession.get({userId: window.localStorage['userId']}) == 'undefined'){
  //   $location.path('/login');
  //   alert("Please log in to continue");
  //   // window.location.reload();
  // }
  // else {
    // Bcard.query().$promise.then(function(response){
    //   $scope.bcards = response;
    // });
    // alert(current_focus.getCard());
    Bcard.get({id: current_focus.getCard()}).$promise.then(function(bcard) {
      $scope.bcard = bcard;
    });

    Tagcard.query().$promise.then(function(response){
      $scope.tag_ids = []
      $scope.tags = [];
      angular.forEach(response, function(tagcard){
        // console.log(response.user_id + " " + response.bcard_id);
        if ($scope.bcard.id == tagcard.bcard_id && tagcard.user_id == window.localStorage['userId']) {
          $scope.tag_ids.push(tagcard.tags);
        }
      });
      // return $scope.tagcards;
      var myarray = $scope.tag_ids[0];
      angular.forEach($scope.tag_ids, function(tag_list){
        angular.forEach(tag_list, function(tag_id){
          Tag.get({id: tag_id}).$promise.then(function(tag) {
            $scope.tags.push(tag);
          });
        });
      });
    });
    $scope.orderProp = 'hits';

    $scope.click_tags = function(card) {
      // alert(card.id);
      current_focus.setCard(card.id);
    }
    $scope.delete_tag = function(tag) {
      var tCard = {};
      // Tagcard.get({bcard_id: $scope.bcard.id, user_id: window.localStorage['userId']}).$promise.then(function(tagcard){
      Tagcard.query().$promise.then(function(response){
        angular.forEach(response, function(tagcard){
          // console.log(response.user_id + " " + response.bcard_id);
          if ($scope.bcard.id == tagcard.bcard_id && tagcard.user_id == window.localStorage['userId']) {
            // alert("Tag Found!");
            tCard = tagcard;
          }
        });
        if (tCard != undefined) {
          var index = tCard.tags.indexOf(tag);
          if (index >= "0") {
            // alert(tCard.tags.inspect);
            tCard.tags.splice(index, 1);
            // alert(tCard.tags.inspect);
            tCard = Tagcard.update(tCard);
            // alert("Deleted from Tagcard");
            index = $scope.tags.indexOf(tag)
            $scope.tags.splice(index, 1);
            // alert("Deleted from View");
            tagcard = Tagcard.update(tCard);
            alert("Tag Deleted!")
          }
        }
        });
      }
})

.controller('myCardCtrl', function($scope, Bcard, UserSession, $location, $ionicPopup, $rootScope, $http) {
  // Bcard.query().$promise.then(function(response){
  //   $scope.bcards = response;
  // });
  // $scope.card={};
  // if (UserSession.get({userId: window.localStorage['userId']}) == 'undefined'){
  //   $location.path('/login');
  //   alert("Please log in to continue");
  //   window.location.reload();
  // }
  // else {
  Bcard.get({id: window.localStorage['userId']}).$promise.then(function(bcard) { //-----------------------------------first_or_create MAY BE WRONG---------------
    $scope.bcard = bcard;
  });

  $scope.save_card = function() {
    $scope.bcard.name = $scope.card.name;
    $scope.bcard.address = $scope.card.address;
    $scope.bcard.company = $scope.card.company;
    $scope.bcard.facebook = $scope.card.facebook;
    $scope.bcard.pinterest = $scope.card.pinterest;
    $scope.bcard.instagram = $scope.card.instagram;
    $scope.bcard.twitter = $scope.card.twitter;
    $scope.bcard.website = $scope.card.website;
    $scope.bcard = Bcard.update($scope.bcard);
    window.location.reload();
  }
  // }
})

.controller('uploadImageCtrl', function($scope) {

})

.controller('eventCtrl', function($scope) {

})

.controller('studyCtrl', function($scope, Deck, $rootScope, current_focus, $state, $stateParams) {
  Deck.query().$promise.then(function(response){
    $scope.decks=[]
    angular.forEach(response, function(deck){
      if(deck.user_id==window.localStorage['userId']) {
        $scope.decks.push(deck);
      }
    });
    return $scope.decks;
  });
  // }
  $scope.click_deck = function(deck) {
    // alert(deck.id);
    current_focus.setDeck(deck.id);
    $state.go('studyDeck', {param1: deck.id});
  }
})

.controller('eventSearchResultsCtrl', function($scope) {

})

.controller('studyDeckCtrl', function($scope, Deck, Bcard, Tagcard, Tag, $rootScope, current_focus, $state, $stateParams, $ionicPopup) {
  // alert($stateParams.param1);
  // alert("Error"); current_focus.getDeck()
  $scope.tagcards=[];
  $scope.bcards=[];
  $scope.focus_bcard = {};
  $scope.focus_tcard = {};
  $scope.tags = [];
  $scope.texts = [];
  $scope.score = 0;
  $scope.total = 0;
  $scope.flip_next = "Flip";
  $scope.skip_results = "Skip to Results";

  Deck.get({id: $stateParams.param1}).$promise.then(function(deck) {
    $scope.deck = deck;
  });
  Tagcard.query().$promise.then(function(response){
    angular.forEach(response, function(tagcard){
      // if(tagcard.id in deck.tagcards) {
      if($scope.deck.tagcards.includes(tagcard.id)) {
        $scope.tagcards.push(tagcard);
      }
    });
    return $scope.tagcards;
  });
  Bcard.query().$promise.then(function(response){
    angular.forEach($scope.tagcards, function(tagcard){
      angular.forEach(response, function(bcard){
      if(tagcard.bcard_id == bcard.id) {
          $scope.bcards.push(bcard);
          // alert(bcard.name);
          $scope.total = $scope.total+1;
        }
      });
    });
    // alert($scope.total);
    $scope.set_view();
    return $scope.bcards;
  });

  $scope.set_view = function() {
    $scope.focus_bcard = $scope.bcards.pop();
    $scope.focus_tcard = $scope.tagcards.pop();

    if ($scope.focus_tcard == undefined || $scope.focus_bcard == undefined) {
      // alert("Finished!");
      $scope.skip_results = "See My Results!";
      $scope.flip_next = "Finished!";
    }
    else {
      $scope.tags = [];
      $scope.texts = [];
      $scope.total++;
      angular.forEach($scope.focus_tcard.tags, function(tag_id){
        // alert("tag.each");
        Tag.get({id: tag_id}).$promise.then(function(tag) {
          $scope.texts.push(tag.text);
          tag.text = "*****"
          $scope.tags.push(tag);
          // var str = $scope.tag.text;
          // str = str.replace(/[a-zA-Z]/g, "*");
          // alert(str);
        });
      });
    }
    // alert($scope.tags[0].text);
  }

  $scope.flip_card = function() {
    if ($scope.flip_next == "Flip") {
      angular.forEach($scope.tags, function(tag){
        tag.text = $scope.texts.pop();
      });
      $scope.flip_next = "Next";
    }
    else if ($scope.flip_next == "Next"){
      // MAKE THE BUTTON SAY FLIP? -> then NEXT?
      // Pass in an indicator to set_view that this is just a flip, not a reset
      // Fill in the data for the tags
      var myPopup = $ionicPopup.show({
        template: 'Were you Correct?',
        title: 'Right or Wrong?',
        subTitle: 'Be honest, this studying is for you!',
        scope: $scope,
        buttons: [
          {
            text: 'Correct!',
            type: 'button-balanced',
            onTap: function(e) {
              $scope.score++;
            }
          },
          {
            text: 'Incorrect!',
            type: 'button-assertive',
            onTap: function(e) {
                    // $scope.set_view();
            }
          }
        ]
      });
        $scope.flip_next = "Flip";
        $scope.set_view();
    }
  }

  $scope.click_tag = function(tag) {
    // Maybe something about marking the tag as a correct/not correct?
    $scope.set_view();
  }

  $scope.last_card = function(deck) {
    if ($scope.skip_results == "Skip to Results") {
      var confirmPopup = $ionicPopup.alert({
        title: 'Skip the rest of the deck?',
        template: 'Are you sure you are done studying?',
        buttons: [
          {
            text: 'Yes!',
            type: 'button-balanced',
            onTap: function(e) {
              // alert($scope.score);
              $state.go('studyResults', {
                param1: deck.id,
                param2: $scope.score,
                param3: $scope.total
              }); //Make param2 the total score
            }
          },
          {
            text: 'Cancel',
            type: 'button-assertive',
            onTap: function(e) {
                    // $scope.set_view();
            }
          }
        ]
      });
    }
    else {
      // alert($scope.score);
      $state.go('studyResults', {
        param1: deck.id,
        param2: $scope.score,
        param3: $scope.total
      }); //Make param2 the total score
    }
  }
})

.controller('studyResultsCtrl', function($scope, $ionicHistory, Deck, $state, $stateParams) {
  // $ionicHistory.clearHistory();
  // $ionicHistory.clearCache();
  // alert($stateParams.param1);
  $scope.deck = {};
  $scope.score = $stateParams.param2;
  $scope.total = $stateParams.param3;
  if ($scope.total == 0) {
    $scope.mesage = "You just studied an empty deck! Add some Cards!";
  }
  else {
    var percent = ($scope.score / $scope.total) * 100;
    if (percent < 60) {
      $scope.message = "You should keep studying..."
    }
    else if (percent < 85) {
      $scope.message = "You did well! Practice makes perfect, you should study later today!"
    }
    else {
      $scope.mesasge = "WOW! Great Job! Seems like you have this down!"
    }
  }
  Deck.get({id: $stateParams.param1}).$promise.then(function(deck) {
    $scope.deck = deck;
  });
  $scope.back_to_study = function() {
    $state.go('study');
    window.location.reload();
  }
})

.controller('searchAttendeesCtrl', function($scope, Bcard) {
  Bcard.query().$promise.then(function(response){
    $scope.bcards = response;
  });
})
