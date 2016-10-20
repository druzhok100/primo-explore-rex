angular.module('viewCustom').factory('locale', ['$location', function($location) {

  var defaultLocale = "da_DK";
  var allowedLocales = ["da_DK", "en_US"];
  var currentLocale = $location.search().lang || defaultLocale;

  return {
    
    getLocale: function() {
      return currentLocale;
    },

    setLocale: function(locale) {
      if(allowedLocales.includes(locale)) {
        currentLocale = locale;
        $location.search("lang", currentLocale);
        return true;
      }
      
      return false;
    },

    getAllowedLocales: function() {
      return allowedLocales;
    }

  }
    

}]);