(function() {
  'use strict';

  angular
    .module('paljusite')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, $mdSidenav, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1438590379576;
    vm.showToastr = showToastr;
    vm.openNav = openNav;

    activate();

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function openNav() {
      $mdSidenav('left').open();
    }

  }
})();
