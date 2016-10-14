angular.module('viewCustom').component('prmTopbarAfter', {
  bindings: {
    parentCtrl: '<',
  },
  // The template is used to load the custom toolbar, 
  // which will replace the existing one once it is initialized. 
  templateUrl: 'custom/NUI/html/prmTopbarAfter.html',
  controller: function() {}
});

