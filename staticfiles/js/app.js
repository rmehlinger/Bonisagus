'use strict';


// Declare app level module which depends on filters, and services
var Bonisagus = angular.module('Bonisagus', [
    'Bonisagus.filters',
    'ui.router',
    'ui.bootstrap',
    'ngDragDrop'
]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/characters/list');

    $stateProvider.
    state('characters', {
        url: '/characters',
        template: '<ui-view/>'
    }).state('characters.list', {
        url: '/list',
        templateUrl: 'static/partials/characters_list.html',
        controller: 'CharacterListController'
    }).state('characters.detail', {
        abstract: true,
        templateUrl: 'static/partials/character_base.html',
        controller: 'CharacterBaseController'
    }).state('characters.detail.new', {
        url: '/new',
        templateUrl: 'static/partials/character.html',
        controller: 'CharacterCreateController'
    }).state('characters.detail.edit', {
        url: '/:guid/edit',
        templateUrl: 'static/partials/character.html',
        controller: 'CharacterEditController'
    }).state('characters.detail.view', {
        url: '/:guid/view',
        templateUrl: 'static/partials/character_view.html',
        controller: 'CharacterViewController'
    });
});