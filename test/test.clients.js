'use strict';

var assert = require('assert');

var Podio;
var PodioClient = require('../lib/podio');
var nock = require('nock');

describe('Clients', function() {

  beforeEach(function() {
    var scope = nock('https://api.podio.com')
                .get('/user')
                .reply(200, {
                  user_id: 999,
                  mail: "a@a.com"
                });

    var credentials = { 
      api_key: 'api_key_test',
      api_secret: 'api_secret_test',
      services: ['users'],
    };
    // Global
    Podio = PodioClient(credentials);
  });
  
  describe('Methods of module users should be available', function() {

    it('Podio.users.get', function(){
      assert.equal(typeof Podio.users.get, 'function');
    });

    it('Podio.users.current', function(){
      assert.equal(typeof Podio.users.current, 'function');
    });

    it('Podio.users.set_property', function(){
      assert.equal(typeof Podio.users.set_property, 'function');
    });

    it('Podio.users.get_property', function(){
      assert.equal(typeof Podio.users.get_property, 'function');
    });

    it('Podio.users.delete_property', function(){
      assert.equal(typeof Podio.users.delete_property, 'function');
    });

    it('Podio.users.set_properties', function(){
      assert.equal(typeof Podio.users.set_properties, 'function');
    });

  });

});
