angular.module('app.controllers', ['app.services'])

.controller('scheduleEventCtrl', function($scope, $locale) {

})

.controller('myEventsCtrl', function($scope, $locale) {
  // $window.open('url', '_self')
})

.controller('nearMeCtrl', function($scope, $locale) {

})

.controller('LoginCtrl', function($scope, $location, UserSession, $ionicPopup, $rootScope, $ionicHistory, $ionicSideMenuDelegate, $state, $locale) {
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

.controller('signupCtrl', function($scope, $ionicSideMenuDelegate, $location, UserSession, $ionicPopup, $rootScope, NewUser, $ionicHistory, $locale) {
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

    };
  }
})

.controller('signoutCtrl', function($scope, $ionicSideMenuDelegate, $location, UserSession, $ionicPopup, $rootScope, $ionicHistory, $locale) {
  $scope.$on('$ionicView.enter', function(){
    $ionicSideMenuDelegate.canDragContent(false);
    window.localStorage.clear();
    $ionicHistory.clearCache();
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

.controller('searchBusinessCardsCtrl', function($scope, Deck, Bcard, Tagcard, $rootScope, $ionicHistory, current_focus, $state, $stateParams, $locale, $ionicModal, $ionicPopup) {
  $scope.$on('$ionicView.enter', function(){
    $ionicHistory.clearCache();
    $ionicHistory.clearHistory();
  });
  $scope.tagcards=[];
  $scope.bcards=[];
  $scope.newBcard = {};
  $scope.card = {};

  Tagcard.query().$promise.then(function(response){
    angular.forEach(response, function(tagcard){
      if(tagcard.user_id == window.localStorage['userId']) {
        $scope.tagcards.push(tagcard);
      }
    });
    Bcard.query().$promise.then(function(response){
      angular.forEach($scope.tagcards, function(tagcard){
        angular.forEach(response, function(bcard){
        if(tagcard.bcard_id == bcard.id && !$scope.bcards.includes(bcard)) {
            $scope.bcards.push(bcard);
          }
        });
      });
    });
  });

  $scope.click_card = function(card) {
    current_focus.setCard(card.id);
    $state.go('viewBusinessCard', {param1: card.id});
  }

  $scope.create_bcard = function() {
    if ($scope.card.name != undefined) {
      $scope.newBcard.name = $scope.card.name;
      $scope.newBcard.address = $scope.card.address;
      $scope.newBcard.company = $scope.card.company;
      $scope.newBcard.facebook = $scope.card.facebook;
      $scope.newBcard.pinterest = $scope.card.pinterest;
      $scope.newBcard.instagram = $scope.card.instagram;
      $scope.newBcard.phone = $scope.card.phone;
      $scope.newBcard.email_address = $scope.card.email_address;
      $scope.newBcard.position = $scope.card.position;
      $scope.newBcard.twitter = $scope.card.twitter;
      $scope.newBcard.website = $scope.card.website;
      var new_bcard= new Bcard($scope.newBcard);
      new_bcard.$save(
        function(newBcard){
          var confirmPopup = $ionicPopup.alert({
            title: 'Business Card Created Successfully!',
            template: 'Business Card Created!'
          });
          $scope.modal.hide();
        },
        function(err){
          var error = err["data"]["error"] || err.data.join('. ')
          var confirmPopup = $ionicPopup.alert({
            title: 'An error occured',
            template: error
          });
        }
      );
      $scope.newBcard = {};
      $scope.bcards.push(new_bcard);
    } else {
      var confirmPopup = $ionicPopup.alert({
        title: 'Name Not Entered',
        template: 'Business Cards Must Have a Name'
      });
    }
  }

  $scope.delete_bcard = function(bcard, bcard_index) {
    var myPopup = $ionicPopup.show({
      template: 'Are you Sure?',
      title: 'Delete',
      subTitle: 'This can never be undone!',
      scope: $scope,
      buttons: [
        {
          text: 'Delete',
          type: 'button-assertive',
          onTap: function(e) {
            $scope.bcards.splice(bcard_index, 1);
            bcard.delete(bcard);
          }
        },
        {
          text: 'Cancel',
          type: 'button-balanced',
          onTap: function(e) {
            // $scope.set_view();
          }
        }
      ]
    });
  }

  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

  $scope.orderProp = 'name';
})

.controller('addTagsCtrl', function($scope, Bcard, UserSession, Tag, Tagcard, current_focus, $location, $ionicPopup, $rootScope, $http, $stateParams, $state, $locale, $ionicHistory) {
  $scope.newTag = {};
  $scope.bcard = {};
  $scope.suggested_tags = [];
  $scope.tag_ids = [];
  $scope.tags = [];

  Bcard.get({id: $stateParams.param1}).$promise.then(function(bcard) {
    $scope.bcard = bcard;
    $scope.suggested_tags = Tag.query();
    Tagcard.query().$promise.then(function(response){
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

  $scope.add_tag = function(tag, tag_index) {
    $scope.tagcard.tags.push(tag.id);
    tag.hits++;
    tag = Tag.update(tag);
    $scope.tagcard = Tagcard.update($scope.tagcard);
    $scope.tags.push(tag);
    // var index = $scope.suggested_tags.indexOf(tag);
    // $scope.suggested_tags.splice(tag_index, 1);
    // $scope.suggested_tags.splice( $scope.suggested_tags.indexOf(tag), 1);
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

  $scope.finished = function() {
    current_focus.setCard( $scope.bcard.id);
    $state.transitionTo('viewBusinessCard', {param1:  $scope.bcard.id}, { location:false, reload: true, inherit: true, notify: true });
  }

})

.controller('decksCtrl', function($scope, Deck, $rootScope, current_focus, $stateParams, $state, $locale, $ionicPopup) {

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
      current_focus.setDeck(deck.id);
      $state.go('viewDeck', {param1: deck.id});
    }

    $scope.create_deck = function() {
      var new_deck= new Deck({ name: $scope.newDeck.name, description: $scope.newDeck.description, user_id: window.localStorage['userId']});

      new_deck.$save(
        function(newDeck){
          var confirmPopup = $ionicPopup.alert({
            title: 'Deck Created Successfully!',
            template: 'Deck Created!'
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
      $scope.decks.push(new_deck);
      window.location.reload();
    }

    $scope.delete_deck = function(deck, deck_index) {
      var myPopup = $ionicPopup.show({
        template: 'Are you Sure?',
        title: 'Delete',
        subTitle: 'This can never be undone!',
        scope: $scope,
        buttons: [
          {
            text: 'Delete',
            type: 'button-assertive',
            onTap: function(e) {
              $scope.decks.splice(deck_index, 1);
              Deck.delete(deck);
            }
          },
          {
            text: 'Cancel',
            type: 'button-balanced',
            onTap: function(e) {
              // $scope.set_view();
            }
          }
        ]
      });
    }
})

.controller('viewDeckCtrl', function($scope, Deck, Bcard, Tagcard, $rootScope, current_focus, $stateParams, $state, $locale) {
  $scope.deck= {};
  $scope.tagcards = [];
  $scope.bcards=[]

  Deck.get({id: $stateParams.param1}).$promise.then(function(deck) {
    $scope.deck = deck;
    // });
    Tagcard.query().$promise.then(function(response){
      angular.forEach(response, function(tagcard){
        if($scope.deck.tagcards.includes(tagcard.id)) {
          $scope.tagcards.push(tagcard);
        }
      });
      Bcard.query().$promise.then(function(response){
        angular.forEach($scope.tagcards, function(tagcard){
          angular.forEach(response, function(bcard){
          if(tagcard.bcard_id == bcard.id) {
              $scope.bcards.push(bcard);
            }
          });
        });
      });
    });
  });

  $scope.click_card = function(card) {
    current_focus.setCard(card.id);
    $state.go('viewBusinessCard', {param1: card.id});
  }
  $scope.add_cards = function(deck) {
    $state.go('addBusinessCards', {param1: deck.id});
  }
})

.controller('addBusinessCardsCtrl', function($scope, Deck, Bcard, Tagcard, $rootScope, current_focus, $stateParams, $state, $ionicPopup, $locale) {
  $scope.deck= {};
  $scope.tagcards = [];
  $scope.tagcard = {};
  $scope.tCard = {};
  $scope.bcard_ids = [];
  $scope.bcards = [];

  Deck.get({id: $stateParams.param1}).$promise.then(function(deck) {
    $scope.deck = deck;
    Tagcard.query().$promise.then(function(response){
      angular.forEach(response, function(tagcard){
        if(tagcard.user_id == window.localStorage['userId']) {
          $scope.tagcards.push(tagcard);
          $scope.bcard_ids.push(tagcard.bcard_id);
        }
      });
      // return $scope.tagcards;
      Bcard.query().$promise.then(function(response){
        angular.forEach(response, function(bcard){
          if (!$scope.bcard_ids.includes(bcard.id)) {
            $scope.bcards.push(bcard);
          }
        });
      });
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

.controller('viewBusinessCardCtrl', function($scope, Bcard, UserSession, Tag, Tagcard, current_focus, $ionicPopup, $stateParams, $state, $locale, $ionicHistory, $ionicPopover, $ionicModal, $ionicActionSheet) {

  $scope.shouldShowDelete = true;
  $scope.tag_ids = [];
  $scope.tags = [];
  $scope.to_delete = [];

  Bcard.get({id: current_focus.getCard()}).$promise.then(function(bcard) {
    $scope.bcard = bcard;

    Tagcard.query().$promise.then(function(response){

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
  });

  $scope.orderProp = 'hits';

  $scope.delete_tag = function(tag, tag_index) {
    var tCard = {};
    Tagcard.query().$promise.then(function(response){
      angular.forEach(response, function(tagcard){
        if ($scope.bcard.id == tagcard.bcard_id && tagcard.user_id == window.localStorage['userId']) {
          tCard = tagcard;
        }
      });
      if (tCard != undefined) {
        var index = tCard.tags.indexOf(tag.id);
        if (index >= "0") {
          tCard.tags.splice(index, 1);
          tCard = Tagcard.update(tCard);
          // index = $scope.tags.indexOf(tag)
          $scope.tags.splice(tag_index, 1);
          tagcard = Tagcard.update(tCard);
          // var confirmPopup = $ionicPopup.alert({
          //   title: 'Tag Deleted',
          //   template: 'Deleted'
          // });
        }
      }
      });
  }

  $scope.click_tags = function(card) {
    current_focus.setCard(card.id);
    $state.go('addTags', {param1: card.id});
  }

})

.controller('myCardCtrl', function($scope, Bcard, UserSession, $location, $ionicPopup, $rootScope, $http, $locale) {

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

.controller('uploadImageCtrl', function($scope, $locale) {

})

.controller('eventCtrl', function($scope, $locale) {

})

.controller('studyCtrl', function($scope, Deck, $rootScope, current_focus, $state, $stateParams, $locale) {
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
    current_focus.setDeck(deck.id);
    $state.go('studyDeck', {param1: deck.id});
  }
})

.controller('eventSearchResultsCtrl', function($scope) {

})

.controller('studyDeckCtrl', function($scope, Deck, Bcard, Tagcard, Tag, $rootScope, current_focus, $state, $stateParams, $ionicPopup, $locale) {

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
// });
    Tagcard.query().$promise.then(function(response){
      angular.forEach(response, function(tagcard){
        // if(tagcard.id in deck.tagcards) {
        if($scope.deck.tagcards.includes(tagcard.id)) {
          $scope.tagcards.push(tagcard);
        }
      });
      // return $scope.tagcards;
    // });
      Bcard.query().$promise.then(function(response){
        angular.forEach($scope.tagcards, function(tagcard){
          angular.forEach(response, function(bcard){
          if(tagcard.bcard_id == bcard.id) {
              $scope.bcards.push(bcard);
              $scope.total = $scope.total+1;
            }
          });
        });
        $scope.set_view();
      });
    });
  });

  $scope.set_view = function() {
    $scope.focus_bcard = $scope.bcards.pop();
    $scope.focus_tcard = $scope.tagcards.pop();

    if ($scope.focus_tcard == undefined || $scope.focus_bcard == undefined) {
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
              $state.go('studyResults', {
                param1: deck.id,
                param2: $scope.score,
                param3: $scope.total
              });
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
      $state.go('studyResults', {
        param1: deck.id,
        param2: $scope.score,
        param3: $scope.total
      });
    }
  }
})

.controller('studyResultsCtrl', function($scope, $ionicHistory, Deck, $state, $stateParams, $locale) {

  $scope.deck = {};
  $scope.score = $stateParams.param2;
  $scope.total = $stateParams.param3;
  if ($scope.total == 0) {
    $scope.mesage = "You just studied an empty deck! Add some Cards :)";
  }
  else {
    var percent = ($scope.score / $scope.total) * 100;
    if (percent < 60) {
      $scope.message = "Grade: [F] -- You should keep studying..."
    }
    else if (percent < 70) {
      $scope.message = "Grade: [D] -- You should keep studying..."
    }
    else if (percent < 80) {
      $scope.message = "Grade: [C] -- You should keep studying..."
    }
    else if (percent < 90) {
      $scope.message = "Grade: [B] -- You did well! Practice makes perfect, you should study later today!"
    }
    else {
      $scope.mesasge = "Grade: [A] -- WOW! Great Job! Seems like you have this down!"
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

.controller('searchAttendeesCtrl', function($scope, Bcard, $locale) {
  Bcard.query().$promise.then(function(response){
    $scope.bcards = response;
  });
})
