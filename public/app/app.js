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
config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {templateUrl: 'views/pages/home.html'})
        .when('/cases', {templateUrl: 'views/pages/cases.html'})
        .when('/cases/:caseId', {templateUrl: 'views/pages/case.html'})
        .when('/service', {templateUrl: 'views/pages/service.html'})
        .when('/culture', {templateUrl: 'views/pages/culture.html'})
        .when('/training', {templateUrl: 'views/pages/training.html'})
        .when('/ux', {templateUrl: 'views/pages/ux.html'})

        .otherwise({redirectTo: '/'});
}]).run([
    '$rootScope',
    '$location',
    '$route',
    function ($rootScope, $location) {
        var currentRoute = $location.path().split('/');

        if ($location.path() == '/') {
            $rootScope.bodyClass = 'homePage firstSection';
        }
        if (currentRoute[1] == 'cases' && currentRoute[2]) {
            $rootScope.bodyClass = 'transparent caseShow';
        }

        if (currentRoute[1] == 'service') {
            $rootScope.bodyClass = 'transparent';
        }

        if (currentRoute[1] == 'culture') {
            $rootScope.bodyClass = 'transparent';
        }

        if (currentRoute[1] == 'training') {
            $rootScope.bodyClass = 'transparent';
        }

        if (currentRoute[1] == 'ux') {
            $rootScope.bodyClass = 'uxPage firstSection';
        }
    }
]);

