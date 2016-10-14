angular.module('viewCustom').component('rexToolbar', {
  bindings: {
    parentCtrl: '<',
  },
  templateUrl: 'custom/NUI/html/toolbar.html',
  controller: ['$scope', '$element' ,function($scope, $element) {
    var ctrl = this;
    
    ctrl.$onInit = function ()  {

      // Removing the scope of the default toolbar. 
      // TODO: Examine the outcome. This is intended to remove the redundant memory footprint of the default toolbar, 
      // but may have undesired side effects if there are services depending on its scope. 
      $scope.$parent.$parent.$destroy();

      // Replacing the default toolbar with the custom one.
      $element.parent().parent().replaceWith($element);

    };

  }]
});

