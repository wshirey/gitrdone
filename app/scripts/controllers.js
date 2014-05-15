'use strict';
angular.module('Test.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.forecast = [
    { name: 'Past', items: 1 },
    { name: 'Today', items: 1 },
    { name: 'Thu', items: 1 },
    { name: 'Fri', items: 1 },
    { name: 'Sat', items: 1 },
    { name: 'Sun', items: 1 },
    { name: 'Future', items: 1 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
