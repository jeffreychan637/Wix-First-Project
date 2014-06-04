'use strict';

var mocha = require('mocha');
var chai = require('chai');
var sinon = require('sinon');
var request = require('supertest');
var lowercase = require('../lowercase');  //use ./ for local files/moduules
var app = require('../app');


var expect = chai.expect;

describe('Function: lowerCaser', function() {
    it('should change the string into all lowercase form', function() {
        expect(lowercase('CAPITAL')).to.equal('capital');
    })

    it('should return empty string given null', function() {
      expect(lowercase(null)).to.equal('');
  });

    it('should return empty string given undefined', function() {
      expect(lowercase(undefined)).to.equal('');
  });
})

describe('Post: Submitting Form', function() {
    it('should return submitted text', function(done) {
        request(app)
          .post('/post')
          .send('firstname=JEFFREY')
          .send('lastname=CHAN')
          .expect('jeffreychan')
          .expect(200, done);
    });
});
