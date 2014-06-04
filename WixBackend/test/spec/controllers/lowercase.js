'use strict';

describe('Factory: lowerCaser', function() {

    var lowerCaser;

    beforeEach(module('wixApp'));

    beforeEach(inject(function (_lowerCaser_) {
      lowerCaser = _lowerCaser_;
    }));

    it('should change the string to all lowercase form', function() {
      expect(lowerCaser('CAPITAL')).toBe('capital');
  });

  //   it('should return empty string given null', function() {
  //     expect(lowerCaser(null)).toBe('');
  // });

  //   it('should return empty string given undefined', function() {
  //     expect(lowerCaser(undefined)).toBe('');
  // });

});