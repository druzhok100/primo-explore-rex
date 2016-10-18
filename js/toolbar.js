angular.module('viewCustom').component('rexToolbar', {
  bindings: {
    parentCtrl: '<',
  },
  templateUrl: 'custom/NUI/html/toolbar.html',
  controller: ['$scope', '$element', '$location', '$window', function($scope, $element, $location, $window) {
    var ctrl = this;

    ctrl.navigateTo = function(url) {      
      if(url === "")
        ctrl.navigateToHomePage();
      else 
        $window.open(url, '_blank');
    };

    ctrl.navigateToHomePage = function() {
      var params = $location.search();
      var vid = params.vid ? params.vid : "NUI";
      var lang = params.lang ? params.lang : "da-DK";
      var base_url = $location.absUrl().split('?')[0];
      $window.location.href = base_url + '?vid=' + vid + '&lang=' + lang;
    };

    ctrl.$onInit = function ()  {
      console.log($window.location)

      ctrl.logoLink = "custom/NUI/img/library-logo.png";

      ctrl.menuList = [
        {
          i18n_label: "mainmenu.label.library_search",
          url: ""
        },
        {
          i18n_label: "mainmenu.label.kontakt_biblioteket",
          url: "http://kontaktbiblioteket.kb.dk/"
        },
        {
          i18n_label: "mainmenu.label.fandt_du_ikke_det_du_søgte?",
          url: "https://aleph.kb.dk/userServices/menu/Order"
        }
      ];

      // // Removing the scope of the default toolbar. 
      // // TODO: Examine the outcome. This is intended to remove the redundant memory footprint of the default toolbar, 
      // // but may have undesired side effects if there are services depending on its scope, i.e. it's not really redundant. 
      // $scope.$parent.$parent.$destroy();

      // Replacing the default toolbar with the custom one.
      $element.parent().parent().replaceWith($element);

    };

  }]
});

