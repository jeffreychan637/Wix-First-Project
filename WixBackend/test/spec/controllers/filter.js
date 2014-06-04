'use strict';

describe('Factory: filterer', function() {

    var lowerCaserFilter;
    var lowerCaser;

    beforeEach(module('wixApp', function($provide) {
      lowerCaser = jasmine.createSpy('lowerCaser')
      $provide.value('lowerCaser', lowerCaser);
    }));

    beforeEach(inject(function ($filter) {
      lowerCaserFilter = $filter('lowerCaserFilter');
    }));

    it('should use my lowerCaser factory', function() {
      lowerCaserFilter('WORD');
      expect(lowerCaser).toHaveBeenCalled();
  });

    it('should not use my lowerCaser factory given null', function() {
      lowerCaserFilter(null);
      expect(lowerCaser).not.toHaveBeenCalled();
  });

});