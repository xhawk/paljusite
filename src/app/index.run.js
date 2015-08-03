(function() {
  'use strict';

  angular
    .module('paljusite')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
