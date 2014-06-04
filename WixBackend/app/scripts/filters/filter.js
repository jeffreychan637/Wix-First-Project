'use strict';

angular.module('wixApp').filter('lowerCaserFilter', function(lowerCaser) {
    return function(toBeFiltered) {
        if (typeof toBeFiltered == "string") {
            return lowerCaser(toBeFiltered);
        } else {
            return '';
        }
    };
});