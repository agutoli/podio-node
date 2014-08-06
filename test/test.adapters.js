'use strict';

var assert = require('assert');
var fs = require('fs');

var PodioClient = require('../lib/podio');
var Podio;

describe('Adapters', function() {

  function noop() {}

  beforeEach(function() {
    var credentials = { 
      api_key: 'api_key_test',
      api_secret: 'api_secret_test',
      services: ['users', 'contacts', 'apps'],
    };
    // Global
    Podio = PodioClient(credentials);
    //console.log(Podio);
  });

  it('should have a property called "_adapterInstance"', function() {
    assert.ok(Podio.hasOwnProperty('_adapterInstance'));
  });

  it('should have a property called "_accessToken"', function() {
    assert.ok(Podio.hasOwnProperty('_accessToken'));
  });

  it('should have a method called "AdapterSetup"', function() {
    assert.ok(Podio.hasOwnProperty('AdapterSetup'));
  });

  it('should have a method called "AdapterRequest"', function() {
    assert.ok(Podio.hasOwnProperty('AdapterRequest'));
  });
  
  it('should have a method called "authorize_url"', function() {
    assert.ok(Podio.hasOwnProperty('authorize_url'));
  });
  
  it('should have a method called "authenticate_with_credentials"', function() {
    assert.ok(Podio.hasOwnProperty('authenticate_with_credentials'));
  });
  
  it('should have a method called "authenticate_with_auth_code"', function() {
    assert.ok(Podio.hasOwnProperty('authenticate_with_auth_code'));
  });
  
  it('should have a method called "authenticate_with_app"', function() {
    assert.ok(Podio.hasOwnProperty('authenticate_with_app'));
  });
  
  it('should have a method called "authenticate_with_transfer_token"', function() {
    assert.ok(Podio.hasOwnProperty('authenticate_with_transfer_token'));
  });
  
  it('should have a method called "authenticate_with_sso"', function() {
    assert.ok(Podio.hasOwnProperty('authenticate_with_sso'));
  });
  
  it('should have a method called "authenticate_with_openid"', function() {
    assert.ok(Podio.hasOwnProperty('authenticate_with_openid'));
  });

  it('should have a method called "authenticate_with_activation_code"', function() {
    assert.ok(Podio.hasOwnProperty('authenticate_with_activation_code'));
  });

});
