'use strict';

var assert = require('assert');
var fs = require('fs');

var PodioClient = require('../lib/podio');
var Podio;

describe('Options', function() {

  function noop() {}

  beforeEach(function() {

    var credentials = { 
      api_key: 'api_key_test',
      api_secret: 'api_secret_test',
      services: ['users', 'contacts', 'apps'],
    };
    // Global
    Podio = PodioClient(credentials);
  });

  it('should be a object', function() {
    assert.equal(typeof Podio._options, 'object');
  });

  it('should be a object', function() {
    assert.equal(typeof Podio._options, 'object');
  });

  it('should apply credentials', function() {
    var req = Podio.authenticate_with_credentials('bruno.agutoli@gmail.com', '*****', noop);
    assert.equal(req.username, 'bruno.agutoli@gmail.com'); 
    assert.equal(req.password, '*****');
    assert.equal(req.grant_type, 'password');
  });

});
