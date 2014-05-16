'use strict';
// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('Test', ['ionic', 'Test.controllers', 'Test.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    .state('app.forecast', {
      url: '/forecast',
      views: {
        'menuContent' :{
          templateUrl: 'templates/forecast.html',
          controller: 'ForecastCtrl'
        }
      }
    })
    .state('app.inbox', {
      url: '/inbox',
      views: {
        'menuContent' :{
          templateUrl: 'templates/inbox.html'
        }
      }
    })
    .state('app.flagged', {
      url: '/flagged',
      views: {
        'menuContent' :{
          templateUrl: 'templates/flagged.html'
        }
      }
    })
    .state('app.projects', {
      url: '/projects',
      views: {
        'menuContent' :{
          templateUrl: 'templates/projects.html'
        }
      }
    })
    .state('app.nearby', {
      url: '/nearby',
      views: {
        'menuContent' :{
          templateUrl: 'templates/nearby.html'
        }
      }
    })
    .state('app.contexts', {
      url: '/contexts',
      views: {
        'menuContent' :{
          templateUrl: 'templates/contexts.html'
        }
      }
    })
    .state('app.perspectives', {
      url: '/perspectives',
      views: {
        'menuContent' :{
          templateUrl: 'templates/perspectives.html'
        }
      }
    })
    .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent' :{
          templateUrl: 'templates/settings.html'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/forecast');
});

