angular
  .module('hshs').controller('homesettingsController', ['$rootScope', '$scope', '$sce', 'homeService', function ($rootScope, $scope, $sce, homeService) {

    homeService.getSettings().then(function(data) {
        $scope.Settings = data.data[0];
        $scope.coopLogos = _.split(data.data[0].field_home_coop_logo, ',');
        $scope.teamLogos = _.split(data.data[0].field_home_team_logo, ',');
        console.log(data.data[0]);
        console.log($scope.coopLogos);
    });

    $scope.trustAsHtml = $sce.trustAsHtml;

  }]);