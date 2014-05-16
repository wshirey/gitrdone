'use strict';
angular.module('Test.controllers', [])

.controller('AppCtrl', function() {
})
.controller('ForecastCtrl', function($scope, newItemModalDlg, Items) {
  $scope.forecast = [
    {
      name: 'Past',
      items: ['Item 1', 'Item 2', 'Item 3']
    },
    {
      name: 'Today',
      items: ['Item 1', 'Item 2']
    },
    {
      name: 'Fri',
      items: ['Item 1', 'Item 2', 'Item 3']
    },
    {
      name: 'Sat',
      items: ['Item 1']
    },
    {
      name: 'Sun',
      items: []
    },
    {
      name: 'Mon',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
    },
    {
      name: 'Future',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4']
    }
  ];
  $scope.selectedDay = $scope.forecast[1];
  $scope.setSelectedDay = function(day) {
    $scope.selectedDay = day;
  };
  $scope.showItemForm = function() {
    newItemModalDlg.show();
  }
})
.controller('ItemFormModalCtrl', function($scope, newItemModalDlg, Items) {
  $scope.item = {};
  $scope.close = function() {
    newItemModalDlg.close();
  }
  $scope.save = function() {
    Items.save(item);
  }
});
