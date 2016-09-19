angular
  .module('hshs').factory('casesService', ['$rootScope', '$http', '$localStorage', 'toaster', 'baseUrl', function ($rootScope, $http, $localStorage, toaster, baseUrl) {
    var promise = {};

    output = {
      getAll: function () {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'cases'
        }).success(function (response) {
          return response;
        }).error(function (data, status) {
          console.log(status);
        });
        return promise;
      }
    };

    return output;
  }]);
