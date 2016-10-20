angular.module('viewCustom').component('rexLanguageSelector', {
  templateUrl: 'custom/NUI/html/languageSelector.html',
  controller: ['$scope', 'locale', function($scope, locale) {
    var ctrl = this;

    ctrl.$onInit = function ()  {
      ctrl.locale = locale.getLocale();
      ctrl.locales = locale.getAllowedLocales();

      console.log(ctrl.locale);
      console.log(ctrl.locales);
    };

    ctrl.languageChanged = function () {
      return locale.setLocale(ctrl.locale);
    };

  }]
});

