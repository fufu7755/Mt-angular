angular
  .module('hshs').controller('homeslideController', ['$rootScope', '$scope', '$routeParams', '$sce', '$localStorage', 'homeService', function ($rootScope, $scope, $routeParams, $sce, $localStorage, homeService) {

    homeService.getSlide().then(function(data) {
        $scope.Slides = data.data;
        $scope.Slide_length = data.data.length;
    });

    homeService.getLogo().then(function(data) {
        $scope.Logos = data.data;
        console.log($scope.Logos);
    });

  }]);