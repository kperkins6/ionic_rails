angular.module('app.controllers', ['app.services'])

.controller('scheduleEventCtrl', function($scope) {

})

.controller('myEventsCtrl', function($scope) {
  // $window.open('url', '_self')
})

.controller('nearMeCtrl', function($scope) {

})

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

    },
    function(err){
      var error = err["data"]["error"] || err.data.join('. ')
      var confirmPopup = $ionicPopup.alert({
        title: 'An error occured',
        template: error
      });
    }
  );

  $scope.openPage = function (pageName) {
      window.location = '#' + pageName;
      window.location.reload();
  };
}
})

.controller('signupCtrl', function($scope, $ionicSideMenuDelegate, $location, UserSession, $ionicPopup, $rootScope, NewUser, $ionicHistory) {
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

    $scope.openPage = function (pageName) {
        window.location = '#' + pageName;
        // window.location.reload();
    };
  }
})

.controller('signoutCtrl', function($scope, $ionicSideMenuDelegate, $location, UserSession, $ionicPopup, $rootScope, $ionicHistory) {
  $scope.$on('$ionicView.enter', function(){
    $ionicSideMenuDelegate.canDragContent(false);
    window.localStorage.clear();
    // alert("Storage Cleared");
    $ionicHistory.clearCache();
    // alert("Cache Cleared");
    $ionicHistory.clearHistory();
    var confirmPopup = $ionicPopup.alert({
      title: 'Sign_Out Successful!',
      template: 'Signed Out'
    });
  });
  $scope.$on('$ionicView.leave', function(){
    $ionicSideMenuDelegate.canDragContent(true);
  });

})

.controller('searchBusinessCardsCtrl', function($scope, Deck, Bcard, Tagcard, $rootScope, $ionicHistory, current_focus, $state, $stateParams) {
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

.controller('addTagsCtrl', function($scope, Bcard, UserSession, Tag, Tagcard, current_focus, $location, $ionicPopup, $rootScope, $http, $stateParams, $state) {
  $scope.newTag = {};
  $scope.bcard = {};
  $scope.suggested_tags = [];
  Bcard.get({id: $stateParams.param1}).$promise.then(function(bcard) {
    $scope.bcard = bcard;
  });
  // Bcard.get({id: current_focus.getCard()}).$promise.then(function(bcard) {
  //   $scope.bcard = bcard;
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

  $scope.orderProp = 'hits';
  $scope.quantity = "10";

  $scope.add_tag = function(tag) {
    $scope.tagcard.tags.push(tag.id);
    tag.hits++;
    tag = Tag.update(tag);
    $scope.tagcard = Tagcard.update($scope.tagcard);
    $scope.tags.push(tag);
    var index = $scope.suggested_tags.indexOf(tag);
    console.log(index);
    $scope.suggested_tags.splice(index, 1);
  }

  $scope.create_tag = function() {

      var new_tag= new Tag({ text: $scope.newTag.text, hits: "1" });

      new_tag.$save(
        function(newTag){
          var confirmPopup = $ionicPopup.alert({
            title: 'Tag Successful!',
            template: 'Success!'
          });
          $scope.tagcard.tags.push(newTag.id);
          $scope.tagcard = Tagcard.update($scope.tagcard);
          $scope.tags.push(newTag);
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

})

.controller('decksCtrl', function($scope, Deck, $rootScope, current_focus, $stateParams, $state) {

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
      $state.go('viewDeck', {param1: deck.id});
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

.controller('viewDeckCtrl', function($scope, Deck, Bcard, Tagcard, $rootScope, current_focus, $stateParams, $state) {
  $scope.deck= {};
  $scope.tagcards = [];
  Deck.get({id: $stateParams.param1}).$promise.then(function(deck) {
    $scope.deck = deck;
  });
  Tagcard.query().$promise.then(function(response){
    angular.forEach(response, function(tagcard){
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

  $scope.click_card = function(card) {
    current_focus.setCard(card.id);
    $state.go('viewBusinessCard', {param1: card.id});
  }
  $scope.add_cards = function(deck) {
    $state.go('addBusinessCards', {param1: deck.id});
  }
})

.controller('addBusinessCardsCtrl', function($scope, Deck, Bcard, Tagcard, $rootScope, current_focus, $stateParams, $state, $ionicPopup) {
  $scope.deck= {};
  $scope.tagcards = [];
  $scope.tagcard = {};
  $scope.tCard = {};
  $scope.bcard_ids = [];

  Deck.get({id: $stateParams.param1}).$promise.then(function(deck) {
    $scope.deck = deck;
  });
  Tagcard.query().$promise.then(function(response){
    $scope.tagcards=[]
    angular.forEach(response, function(tagcard){
      if(tagcard.user_id == window.localStorage['userId']) {
        $scope.tagcards.push(tagcard);
        $scope.bcard_ids.push(tagcard.bcard_id);
      }
    });
    return $scope.tagcards;
  });
  $scope.bcards = [];
  Bcard.query().$promise.then(function(response){
    angular.forEach(response, function(bcard){
      if (!$scope.bcard_ids.includes(bcard.id)) {
        $scope.bcards.push(bcard);
      }
    });
  });

  $scope.click_card = function(card) {
    console.log(card.id);
    console.log($scope.deck.id);
    $scope.tagcard.id = "-1";
    if ($scope.deck.tagcards == null) {
      $scope.deck.tagcards = ["0"];
    }
    Tagcard.query().$promise.then(function(response){
      $scope.tag_ids = [];
      angular.forEach(response, function(tagcard){
        if (tagcard.bcard_id == card.id  && tagcard.user_id == window.localStorage['userId']) {
          $scope.tag_ids.push(tagcard.id);
          $scope.tagcard = tagcard;
        }
      });

     if ($scope.tagcard.id != "-1" && !($scope.deck.tagcards.includes($scope.tagcard.id))) {
      //  alert("Adding Tcard");
       $scope.deck.tagcards.push($scope.tagcard.id);
       $scope.deck = Deck.update($scope.deck);
       console.log($scope.deck.tagcards);
       var confirmPopup = $ionicPopup.alert({
         title: 'Card Added!',
         template: 'Success!'
       });
   } else if ($scope.tagcard != "-1" && $scope.deck.tagcards.includes($scope.tagcard.id)) {
     var confirmPopup = $ionicPopup.alert({
       title: 'Error!',
       template: 'Card Already Added'
     });
   } else {
        // alert("Making Tcard");
         var new_tagcard= new Tagcard({user_id: window.localStorage['userId'], bcard_id: card.id, tags: ["0"]});
         new_tagcard.$save(
           function(newTagcard){

             if ($scope.deck.tagcards == undefined) {
                $scope.deck.tagcards = ["0"];
             }
             $scope.deck.tagcards.push(newTagcard.id);
             $scope.deck = Deck.update($scope.deck);
             var confirmPopup = $ionicPopup.alert({
               title: 'Card Added!',
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
       }
       var index = $scope.bcards.indexOf(card);
       console.log(index);
       $scope.bcards.splice(index, 1);
   });
   }
  // $scope.orderProp = 'name';
  $scope.quantity = "25";

})

.controller('viewBusinessCardCtrl', function($scope, Bcard, UserSession, Tag, Tagcard, current_focus, $ionicPopup, $stateParams, $state) {

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
      $state.go('addTags', {param1: card.id});
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

  $scope.card={};
  $scope.bcard={};

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
    $scope.bcard.phone = $scope.card.phone;
    $scope.bcard.email_address = $scope.card.email_address;
    $scope.bcard.position = $scope.card.position;
    $scope.bcard.twitter = $scope.card.twitter;
    $scope.bcard.website = $scope.card.website;
    $scope.bcard = Bcard.update($scope.bcard);
    var confirmPopup = $ionicPopup.alert({
      title: 'Update Successful!',
      template: 'Business Card Updated!'
    });
  }
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
      // $scope.total++;
      angular.forEach($scope.focus_tcard.tags, function(tag_id){
        Tag.get({id: tag_id}).$promise.then(function(tag) {
          $scope.texts.push(tag.text);
          tag.text = "*****"
          $scope.tags.push(tag);
        });
      });
    }
  }

  $scope.flip_card = function() {
    if ($scope.flip_next == "Flip") {
      angular.forEach($scope.tags, function(tag){
        tag.text = $scope.texts.pop();
      });
      $scope.flip_next = "Next";
    }
    else if ($scope.flip_next == "Next"){
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
    $scope.mesage = "You just studied an empty deck! Add some Cards :)";
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
