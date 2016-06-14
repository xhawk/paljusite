(function() {
  'use strict';

  angular
    .module('paljusite')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr, $locationProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;

    $locationProvider.html5Mode(true);
  }

})();
