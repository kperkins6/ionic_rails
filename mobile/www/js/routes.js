angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {
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

  .state('tabsController.scheduleEvent', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/scheduleEvent.html',
        controller: 'scheduleEventCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.myEvents'
      2) Using $state.go programatically:
        $state.go('tabsController.myEvents');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab2/page3
  */
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

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.addTags'
      2) Using $state.go programatically:
        $state.go('tabsController.addTags');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page8
      /page1/tab2/page8
  */
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

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.viewBusinessCard'
      2) Using $state.go programatically:
        $state.go('tabsController.viewBusinessCard');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page11
      /page1/tab2/page11
  */
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

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.event'
      2) Using $state.go programatically:
        $state.go('tabsController.event');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page14
      /page1/tab2/page14
  */
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

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.searchAttendees'
      2) Using $state.go programatically:
        $state.go('tabsController.searchAttendees');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page20
      /page1/tab2/page20
  */
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

$urlRouterProvider.otherwise('/login')



});
