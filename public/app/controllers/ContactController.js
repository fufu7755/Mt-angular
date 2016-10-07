/**
 * Created by fu on 16/9/30.
 */
angular
    .module('hshs').controller('ContactController', ['$rootScope', '$scope', '$route', '$http', '$routeParams', '$location', '$window', function ($rootScope, $scope, $route, $http, $routeParams, $location, $window) {

    $scope.signBox = false;

    $scope.result = 'hidden';
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : '/views/partials/contact-form.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log(data);
                if (data.success) { //success comes from the return json object
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success'
                    $scope.signBox = true;
                } else {
                    console.log(data);
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = '请填写所有内容!';
            $scope.result='bg-danger';
        }
    }
}]);