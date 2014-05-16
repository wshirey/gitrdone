'use strict';
angular.module('Test.services', [])

.service('newItemModalDlg', function($ionicModal) {
  var dlg;
  $ionicModal.fromTemplateUrl('templates/item-form-modal.html', {
    animation: 'slide-in-up'
  }).then(function(modal) {
    dlg = modal;
  });

  this.show = function() {
    dlg.show();
  };
  this.close = function() {
    dlg.hide();
  };
})
.service('Items', function() {
  var items = [];
  var msInDay = 1000 * 60 * 60 * 24;
  this.getForecast = function() {
    var forecast = [
      {date: moment().subtract(1, 'day').toDate()},
      {date: moment()},
      {date: moment().add(1, 'day').toDate()},
      {date: moment().add(2, 'day').toDate()},
      {date: moment().add(3, 'day').toDate()},
      {date: moment().add(4, 'day').toDate()},
      {date: moment().add(5, 'day').toDate()},
    ];    
    var dates = [
      moment().startOf('day').toDate(),
      moment().startOf('day').add(1, 'day').toDate(),
      moment().startOf('day').add(2, 'day').toDate(),
      moment().startOf('day').add(3, 'day').toDate(),
      moment().startOf('day').add(4, 'day').toDate(),
      moment().startOf('day').add(5, 'day').toDate()
    ]
    // get last midnight
    today.setHours(0,0,0);
    // get all items from before today
    forecast = _.groupBy(items,
      function(item) {
        var i = 0;
        if (item.date < dates[i]) return i; // past
        else if (item.date < dates[++i]) return i; // today
        else if (item.date < dates[++i]) return i; // tomorrow
        else if (item.date < dates[++i]) return i; // 2 days from now
        else if (item.date < dates[++i]) return i; // 3 days from now
        else if (item.date < dates[++i]) return i; // 4 days from now
        else return ++i;
      });
  };

  this.save = function(item) {
    items.push(item);
  }

});