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
      .when('/alliances/:allianceId/clubs', { templateUrl: 'views/pages/cases.html' })
      .otherwise({ redirectTo: '/' });
}]).run([
    '$rootScope',
    '$location',
    function ($rootScope, $location, userService) {
        if($location.path() == '/') {
            $rootScope.bodyClass = 'homePage';
        }
    }
]);

