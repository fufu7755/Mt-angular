angular
  .module('hshs').controller('mainController', ['$route', '$scope', '$routeParams', '$location', function ($route, $scope, $routeParams , $location) {
    $scope.$on('$routeChangeSuccess', function(event, current, previous) {
        if (current !== previous) {
            console.log(previous);
            var currentRoute = $location.path().split('/');
            $scope.routeClassName = $route.current.className;
            if($location.path() != '/' && currentRoute[1] != 'cases') {
                window.scrollTo(0, 0);
            }
            if($location.path() == '/' && previous != undefined) {
                location.reload();
            }
        }
    })

  }]);