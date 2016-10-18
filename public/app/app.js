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
            templateUrl: 'views/pages/cases.html'
        })
        .when('/cases/:caseId', {
            templateUrl: 'views/pages/case.html',
            className: 'js-transparent transparent caseShow'
        })
        .when('/service', {
            templateUrl: 'views/pages/service.html',
            className: 'js-transparent transparent'
        })
        .when('/culture', {
            templateUrl: 'views/pages/culture.html',
            className: 'js-transparent transparent'
        })
        .when('/training', {
            templateUrl: 'views/pages/training.html',
            className: 'js-transparent transparent'
        })
        .when('/ux', {
            templateUrl: 'views/pages/ux.html'
        })
        .when('/ai', {
            templateUrl: 'views/pages/ai.html',
            className: 'aiPage js-transparent transparent'
        })
        .when('/contact', {templateUrl: 'views/pages/contact.html'})

        .otherwise({redirectTo: '/'});
}]).run([
    '$rootScope',
    '$location',
    '$route',
    function ($rootScope, $location, $route) {

    }
]);

