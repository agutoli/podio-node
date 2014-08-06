'use strict';

var assert = require('assert');

var PodioClient = require('../lib/podio');
var Podio;

describe('Options', function() {

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

  it('checking connection keys "options.api_key" and "options.api_secret"', function() {
    assert.equal(Podio._options.api_key, 'api_key_test');
    assert.equal(Podio._options.api_secret, 'api_secret_test');
  });

  it('should load modules/services "options.services"', function() {
    assert.deepEqual(Podio._options.services, ['base', 'users', 'contacts', 'apps']);
  });

  it('should being loaded default adapter "options.adapter"', function() {
    assert.equal(Podio._options.adapter, 'oauth');
  });

  it('check the auth url "options.api_auth_url"', function() {
    assert.equal(Podio._options.api_auth_url, 'https://podio.com');
  });

  it('check the API url "options.api_url"', function() {
    assert.equal(Podio._options.api_url, 'https://api.podio.com');
  });

  it('throws: without passing required "api_key" ', function() {
    function testFunction(){
      PodioClient({
        //api_key: "abc",
        api_secret: "abc", 
        services:['users']
      });
    }
    assert.throws(testFunction, Podio.MissingRequiredParameter);
  });

  it('throws: without passing required "api_secret" ', function() {
    function testFunction(){
      PodioClient({
        api_key: "abc", 
        //api_secret: "abc",
        services:['users']
      });
    }
    assert.throws(testFunction, Podio.MissingRequiredParameter);
  });

  it('throws: without passing required "services" ', function() {
    function testFunction(){
      PodioClient({
        api_key: "abc", 
        api_secret: "abc",
        //services:['users']
      });
    }
    assert.throws(testFunction, Podio.MissingRequiredParameter);
  });

});
