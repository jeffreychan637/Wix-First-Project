'use strict';

angular.module('wixApp').factory('lowerCaser', function() {
    return function (toBeLowercased) {
      // if (typeof toBeLowercased == "string") {
      //   return toBeLowercased.toLowerCase();
      // } else {
      //   return '';
      return toBeLowercased.toLowerCase();
    }
  });


