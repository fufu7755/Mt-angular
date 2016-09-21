angular
  .module('hshs').controller('mainController', ['$route', '$scope', '$routeParams', '$location', function ($route, $scope, $routeParams , $location) {
    var ctrl = this;

    $scope.$on('imagesLoaded:loaded', function(event, element){
        console.log('loaded', element);
    });

    ctrl.imgLoadedEvents = {

        always: function(instance) {
            // Do stuff
        },

        done: function(instance) {
            angular.element(instance.elements[0]).addClass('loaded');
        },

        fail: function(instance) {
            // Do stuff
        }

    };
  }]);