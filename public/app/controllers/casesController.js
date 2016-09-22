angular
  .module('hshs').controller('casesController', ['$rootScope', '$scope', '$routeParams', '$sce', '$localStorage', 'casesService', function ($rootScope, $scope, $routeParams, $sce, $localStorage, casesService) {

    var caseId;
    caseId = parseInt($routeParams.caseId);

    $scope.ready = false;
    casesService.getAll().then(function(data) {
        $scope.cases = data.data;
        console.log($scope.cases);
        $scope.ready = true;
    });

    if($routeParams.caseId) {
        casesService.getCase().then(function(data) {
            $scope.cases = data.data;
        });
    }

  }]);