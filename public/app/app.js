'use strict';

angular.module('hshs', [
  'ngRoute',
  'ngSanitize',
  'ngStorage',
  'toaster',
  'angularUtils.directives.dirPagination',
  'ui.mask'
]).
constant(
  'baseUrl', 'http://data-soul.nodefu.net/api/'
).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', { templateUrl: 'views/pages/home.html' })
      .when('/cases', { templateUrl: 'views/pages/cases.html' })
      .when('/cases/:caseId', { templateUrl: 'views/pages/case.html' })
        .when('/service', { templateUrl: 'views/pages/service.html' })

        .otherwise({ redirectTo: '/' });
}]).run([
    '$rootScope',
    '$location',
    '$route',
    function ($rootScope, $location) {
        var currentRoute = $location.path().split('/');

        if($location.path() == '/') {
            $rootScope.bodyClass = 'homePage';
        }
        if(currentRoute[1] == 'cases' && currentRoute[2]) {
            $rootScope.bodyClass = 'transparent caseShow';
        }

        if(currentRoute[1] == 'service') {
            $rootScope.bodyClass = 'transparent';
        }
    }
]);

