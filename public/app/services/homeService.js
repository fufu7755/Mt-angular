angular
    .module('hshs').factory('homeService', ['$rootScope', '$http', 'toaster', 'baseUrl', function ($rootScope, $http, toaster, baseUrl) {
    var promise = {};

    output = {
        getSlide: function () {
            promise = $http({
                method: 'GET',
                url: baseUrl + 'slide_images',
                params: {},
            }).success(function (response) {
                return response.result;
            }).error(function (data, status) {
                console.log(status);
            });
            return promise;
        },

        getLogo: function () {
            promise = $http({
                method: 'GET',
                url: baseUrl + 'slide_logos',
                params: {},
            }).success(function (response) {
                return response.result;
            }).error(function (data, status) {
                console.log(status);
            });
            return promise;
        },

        getSettings: function () {
            promise = $http({
                method: 'GET',
                url: baseUrl + 'home_settings',
                params: {},
            }).success(function (response) {
                return response.result;
            }).error(function (data, status) {
                console.log(status);
            });
            return promise;
        },

        getHomecase1: function () {
            promise = $http({
                method: 'GET',
                url: baseUrl + 'home_case_1'
            }).success(function (response) {
                return response.result;
            }).error(function (data, status) {
                console.log(status);
            });
            return promise;
        }

    };

    return output;
}]);
