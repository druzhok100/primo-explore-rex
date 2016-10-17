angular.module('viewCustom').component('rexToolbar', {
  bindings: {
    parentCtrl: '<',
  },
  templateUrl: 'custom/NUI/html/toolbar.html',
  controller: ['$scope', '$element', '$location', '$window', function($scope, $element, $location, $window) {
    var ctrl = this;
    
    ctrl.logoLink = "custom/NUI/img/library-logo.png";

    ctrl.navigateToHomePage = function() {
      var params = $location.search();
      var vid = params.vid ? params.vid : "NUI";
      var lang = params.lang ? params.lang : "da-DK";

      $location.search({vid: vid, lang: lang});
      $window.location.reload();
    };

    ctrl.$onInit = function ()  {
      console.log(ctrl.parentCtrl)
      // // Removing the scope of the default toolbar. 
      // // TODO: Examine the outcome. This is intended to remove the redundant memory footprint of the default toolbar, 
      // // but may have undesired side effects if there are services depending on its scope. 
      // $scope.$parent.$parent.$destroy();

      // Replacing the default toolbar with the custom one.
      $element.parent().parent().replaceWith($element);

      // // console.log($element.parent().parent().children()[0]);
      // $element.parent().parent().children()[0].remove();


    };

  }]
});

