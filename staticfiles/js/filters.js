'use strict';

/* Filters */

angular.module('Bonisagus.filters', []).filter('in_books', function() {
    return function(items, book) {
        return _.filter(items, function(item) {
            return book == item.book
        });
    }
}).filter('magnitude', function(){
    return function(items, magnitude) {
        return _.filter(items, function(item) {
            return magnitude == item.magnitude || items.magnitude == null;
        });
    }
});