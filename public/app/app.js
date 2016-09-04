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
      .when('/alliances', { templateUrl: 'views/pages/alliances.html' })
      .when('/alliances/:allianceId/clubs', { templateUrl: 'views/pages/clubs.html' })
      .when('/alliances/:allianceId/clubs/:clubId', { templateUrl: 'views/pages/club.html' })
      .when('/matches', { templateUrl: 'views/pages/matches.html' })
      .otherwise({ redirectTo: '/' });
}]).run([
    '$rootScope',
    '$location',
    function ($rootScope, $location, userService) {
    }
]);

