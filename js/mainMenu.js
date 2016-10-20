angular.module('viewCustom').component('rexMainMenu', {
  templateUrl: 'custom/NUI/html/mainMenu.html',
  controller: ['$scope', '$element', 'navigation', function($scope, $element, navigation) {
    var ctrl = this;

    ctrl.$onInit = function ()  {
      
      ctrl.navigation = navigation;

      ctrl.menuList = [
        {
          i18nLabel: "mainmenu.label.library_search",
          url: ""
        },
        {
          i18nLabel: "mainmenu.label.kontakt_biblioteket",
          url: "http://kontaktbiblioteket.kb.dk/"
        },
        {
          i18nLabel: "mainmenu.label.fandt_du_ikke_det_du_søgte?",
          url: "https://aleph.kb.dk/userServices/menu/Order"
        }
      ];

    };

  }]
});

