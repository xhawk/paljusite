!function(){"use strict";angular.module("paljusite",["ngAnimate","ngCookies","ngTouch","ngSanitize","restangular","ui.router","ngMaterial"])}(),function(){"use strict";function t(){function t(t,n){function a(){n("left").close()}var e=this;e.closeNav=a,e.relativeDate=t(e.creationDate).fromNow()}var n={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{},controller:t,controllerAs:"navbar",bindToController:!0};return t.$inject=["moment","$mdSidenav"],n}angular.module("paljusite").directive("acmeNavbar",t)}(),function(){"use strict";function t(t,n,a,e){function o(){n(function(){l.classAnimation="rubberBand"},4e3)}function i(){e.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),l.classAnimation=""}function r(){a("left").open()}var l=this;l.awesomeThings=[],l.classAnimation="",l.creationDate=1438590379576,l.showToastr=i,l.openNav=r,o()}angular.module("paljusite").controller("MainController",t),t.$inject=["$scope","$timeout","$mdSidenav","toastr"]}(),function(){"use strict";function t(t){t.debug("runBlock end")}angular.module("paljusite").run(t),t.$inject=["$log"]}(),function(){"use strict";function t(t,n){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),n.otherwise("/")}angular.module("paljusite").config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("paljusite").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function t(t,n){t.debugEnabled(!0),n.options.timeOut=3e3,n.options.positionClass="toast-top-right",n.options.preventDuplicates=!0,n.options.progressBar=!0}angular.module("paljusite").config(t),t.$inject=["$logProvider","toastr"]}(),angular.module("paljusite").run(["$templateCache",function(t){t.put("app/main/main.html",'<div layout="row"><section flex=""><header><acme-navbar></acme-navbar></header><md-toolbar class="md-theme-indigo"><div class="md-toolbar-tools"><md-button class="md-icon-button" aria-label="Settings" ng-click="main.openNav()"><md-icon>menu</md-icon></md-button><h2><span>TJ Palju</span></h2><span flex=""></span></div></md-toolbar><md-content layout-padding=""><div><h1>TJ Palju</h1><i class="material-icons">face</i> <i class="material-icons">face</i><p>Palju vuokralle</p></div></md-content></section></div>'),t.put("app/components/navbar/navbar.html",'<md-sidenav class="md-sidenav-left md-whiteframe-z2" md-component-id="left"><md-content layout-padding=""><md-button ng-click="navbar.closeNav()" class="md-primary">Sulje</md-button><p hide-md="" show-gt-md="">Alkuun, varaa, kuvia, yhteystiedot</p></md-content></md-sidenav>')}]);