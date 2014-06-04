'use strict';

module.exports = function(tobeLowerCased) {
    if (typeof tobeLowerCased == "string") {
        return tobeLowerCased.toLowerCase();
    } else {
        return '';
    }
}