angular.module('viewCustom').controller('prmTopbarAfterController', ['$element', '$scope', function ($element, $scope) {

  var ctrl = this;

  ctrl.$onInit = function () {

    var prmTopBar = $element.parent();
    var prmUserArea = prmTopBar.find('prm-user-area');
    var prmSearchBookmarkFilter = prmTopBar.find('prm-search-bookmark-filter');
    var prmMainMenu = prmTopBar.find('prm-main-menu');
    

    console.log(prmUserArea);
    console.log(prmSearchBookmarkFilter);

    // prmMainMenu.after(prmUserArea);
    // prmUserArea.insertBefore(prmSearchBookmarkFilter);

    // console.log(prmTopBar);
    // console.log(prmChangeLang);
    // console.log(prmSearchBookmarkFilter);



  };

  // $scope.$watch(angular.bind(ctrl, function () {
  //     return ctrl.parentCtrl.facetEventToSearch.dispatching;

  //   }), function (newVal, oldVal) {
  //     if(newVal !== oldVal) {        

  //       ctrl.run = true;
  //       var matched = document.querySelectorAll('[ng-model^="ctrl.facetGroup.additionalData.selected"]');
  //       var matchedLength = matched.length;
  //       for(var i = 0; i < matchedLength; i++) {
  //         angular.element(angular.element(matched[i]).parent()[0]).addClass('flex-20');
  //       }
  //       console.log('Publication year styling applied.');
  //     }
  //   });


}]);



angular.module('viewCustom').component('prmTopbarAfter', {
  bindings: {
    parentCtrl: '<',
  },
  templateUrl: 'custom/NUI/html/prmTopbarAfter.html',
  controller: 'prmTopbarAfterController'
});

