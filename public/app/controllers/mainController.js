angular
  .module('hshs').controller('mainController', ['$route', '$scope', '$routeParams', '$location', function ($route, $scope, $routeParams , $location) {
    $scope.$on('$routeChangeSuccess', function(newVal, oldVal) {
        if (oldVal !== newVal) {
            $scope.routeClassName = $route.current.className;
            window.scrollTo(0, 0);
        }
    })

  }]);