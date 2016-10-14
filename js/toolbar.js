angular.module('viewCustom').component('rexToolbar', {
  bindings: {
    parentCtrl: '<',
  },
  templateUrl: 'custom/NUI/html/toolbar.html',
  controller: ['$scope' ,function($scope) {
    var ctrl = this;
    console.log('Toolbar hit!');
  }]
});

