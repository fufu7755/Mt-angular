angular
  .module('hshs').controller('homeslideController', ['$rootScope', '$scope', '$routeParams', '$sce', '$localStorage', 'homeService', function ($rootScope, $scope, $routeParams, $sce, $localStorage, homeService) {

    homeService.getSlide().then(function(data) {
        $scope.Slides = data.data;
        console.log(data.data);
    });

  }]);