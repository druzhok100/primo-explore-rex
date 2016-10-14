angular.module('viewCustom').component('prmTopbarAfter', {
  bindings: {
    parentCtrl: '<',
  },
  controller: ['$element', '$scope', '$compile', function($element, $scope, $compile) {

    var ctrl = this;

    ctrl.$onInit = function () {
      
      // Removing the scope of the default toolbar. 
      $scope.$parent.$destroy();

      // Replacing the default toolbar with the custom one.
      $element.parent().replaceWith($compile('<rex-toolbar/>')($scope));

    };
    
  }
]});

