angular
  .module('hshs').controller('headerController', ['$rootScope', '$scope', '$route', '$routeParams', '$location', '$window', function ($rootScope, $scope, $route, $routeParams, $location, $window) {
    var currentRoute = $location.path().split('/');

    $scope.setActive = function(menuItem) {
      return menuItem == currentRoute[1] ? "active" : "";
    }

  }]);