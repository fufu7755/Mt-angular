'use strict';

angular.module('hshs', [
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    'toaster',
    'angularUtils.directives.dirPagination',
    'ui.mask',
    'ngAnimate'
]).
constant(
    'baseUrl', 'http://data-soul.nodefu.net/api/'
).
config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'views/pages/home.html',
            className: 'homePage firstSection'
        })
        .when('/cases', {
            templateUrl: 'views/pages/cases.html',
            className: 'transparent'
        })
        .when('/cases/:caseId', {
            templateUrl: 'views/pages/case.html',
            className: 'transparent caseShow'
        })
        .when('/service', {
            templateUrl: 'views/pages/service.html',
            className: 'transparent'
        })
        .when('/culture', {
            templateUrl: 'views/pages/culture.html',
            className: 'transparent'
        })
        .when('/training', {
            templateUrl: 'views/pages/training.html',
            className: 'transparent'
        })
        .when('/ux', {
            templateUrl: 'views/pages/ux.html'
        })
        .when('/ai', {
            templateUrl: 'views/pages/ai.html',
            className: 'aiPage transparent'
        })
        .when('/contact', {templateUrl: 'views/pages/contact.html'})

        .otherwise({redirectTo: '/'});
}]).run([
    '$rootScope',
    '$location',
    '$route',
    function ($rootScope, $location, $route) {
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

        if (currentRoute[1] == 'ai') {
            $rootScope.bodyClass = 'aiPage transparent';
        }
    }
]);

