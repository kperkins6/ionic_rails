angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $httpProvider.defaults.withCredentials = true;
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })

  .state('logout', {
      // url: '/logout',
      // templateUrl: 'templates/logout.html',
      controller: 'signoutCtrl'
  })

  .state('tabsController.scheduleEvent', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/scheduleEvent.html',
        controller: 'scheduleEventCtrl'
      }
    }
  })

  .state('tabsController.myEvents', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/myEvents.html',
        controller: 'myEventsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/myEvents.html',
        controller: 'myEventsCtrl'
      }
    }
  })

  .state('tabsController.nearMe', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/nearMe.html',
        controller: 'nearMeCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('searchBusinessCards', {
    url: '/page7',
    templateUrl: 'templates/searchBusinessCards.html',
    controller: 'searchBusinessCardsCtrl'
  })

  .state('addTags', {
    url: '/page8',
    templateUrl: 'templates/addTags.html',
    controller: 'addTagsCtrl'
  })

  .state('decks', {
    url: '/page9',
    templateUrl: 'templates/decks.html',
    controller: 'decksCtrl'
  })

  .state('viewDeck', {
    url: '/page10',
    templateUrl: 'templates/viewDeck.html',
    controller: 'viewDeckCtrl'
  })

  .state('viewBusinessCard', {
    url: '/page11',
    templateUrl: 'templates/viewBusinessCard.html',
    controller: 'viewBusinessCardCtrl'
  })

  .state('myCard', {
    url: '/page12',
    templateUrl: 'templates/myCard.html',
    controller: 'myCardCtrl'
  })

  .state('tabsController.uploadImage', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/uploadImage.html',
        controller: 'uploadImageCtrl'
      }
    }
  })

  .state('tabsController.event', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/event.html',
        controller: 'eventCtrl'
      },
      'tab2': {
        templateUrl: 'templates/event.html',
        controller: 'eventCtrl'
      }
    }
  })

  .state('study', {
    url: '/page15',
    templateUrl: 'templates/study.html',
    controller: 'studyCtrl'
  })

  .state('eventSearchResults', {
    url: '/page16',
    templateUrl: 'templates/eventSearchResults.html',
    controller: 'eventSearchResultsCtrl'
  })

  .state('studyDeck', {
    url: '/page17',
    templateUrl: 'templates/studyDeck.html',
    controller: 'studyDeckCtrl'
  })

  .state('studyResults', {
    url: '/page18',
    templateUrl: 'templates/studyResults.html',
    controller: 'studyResultsCtrl'
  })

  .state('tabsController.searchAttendees', {
    url: '/page20',
    views: {
      'tab1': {
        templateUrl: 'templates/searchAttendees.html',
        controller: 'searchAttendeesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/searchAttendees.html',
        controller: 'searchAttendeesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login');



});
