angular
  .module('hshs').controller('caseController', ['$rootScope', '$scope', '$location', '$routeParams', '$sce', '$localStorage', 'casesService', function ($rootScope, $scope, $location, $routeParams, $sce, $localStorage, casesService) {

    var caseId;
    caseId = parseInt($routeParams.caseId);


    if($routeParams.caseId) {
        casesService.getCase(caseId).then(function(data) {
            $scope.case = data.data[0];
            console.log(data.data[0]);
        });
    }
    $scope.trustAsHtml = $sce.trustAsHtml;
  }]);