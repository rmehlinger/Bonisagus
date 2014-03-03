'use strict';


// Declare app level module which depends on filters, and services
var Bonisagus = angular.module('Bonisagus', [
    'ngRoute',
    'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/character', {templateUrl: '/static/partials/character_creation.html',
        controller: 'CharacterController'});
    $routeProvider.otherwise({redirectTo: '/character'});
}]);
