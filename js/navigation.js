angular.module('viewCustom').factory('navigation', ['$location', '$window', 'locale', function($location, $window, locale) {
  
  return {

    navigateTo: function(url) {      
      if(url === "")
        ctrl.navigateToHomePage();
      else 
        $window.open(url, '_blank');
    },

    navigateToHomePage: function() {
      var params = $location.search();
      var vid = params.vid || "NUI";
      var lang = params.lang || locale.defaultLocale;
      var baseUrl = $location.absUrl().split('?')[0];
      $window.location.href = baseUrl + '?vid=' + vid + '&lang=' + lang;
    }

  }
  
}]);