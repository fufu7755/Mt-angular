angular
  .module('hshs').controller('homesettingsController', ['$rootScope', '$scope', '$sce', 'homeService', function ($rootScope, $scope, $sce, homeService) {

    homeService.getSettings().then(function(data) {
        $scope.Settings = data.data[0];

        console.log($scope.Settings);
    });

    $scope.trustAsHtml = $sce.trustAsHtml;

  }]);