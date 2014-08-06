/**
 * Node wrapper to Podio API
 *
 * @module       adapters/simple-oauth2
 * @author       Bruno Thiago Leite Agutoli <bruno.agutoli@gmail.com>
 * @version      Release: 0.0.1
 * @license      http://www.gnu.org/licenses/gpl.html GNU GENERAL PUBLIC LICENSE
 * @see          https://developers.podio.com/
 */

/*jshint node: true */
'use strict';

var Podio;
var OAuth2;
var SimpleOauth = require('simple-oauth2');

/**
 * Adapter for lib "simple-oauth2"
 * @see https://www.npmjs.org/package/simple-oauth2
 */
function SimpleOAuth2Adapter() {
  this._accessToken = null;
  this._adapterInstance = null;
}

SimpleOAuth2Adapter.prototype = {
    /**
     * Abstract function called in the podioClient
     *
     * @memberOf! SimpleOAuth2Adapter
     * @param {void}
     * @return {object} Request object
     */
  AdapterSetup: function(){
    // API's keys
    var api_key = Podio._options.api_key;
    var api_secret = Podio._options.api_secret;

    var options = { 
      clientID: api_key,
      clientSecret: api_secret,
      site: Podio._options.api_url
    };

    this._adapterInstance = new SimpleOauth(options);
  },

  AdapterRequest: function(params, callbackFunc){
    var _this = this;
    var apiPath = params.apiPath || "";
    _this._adapterInstance.api('GET', apiPath, {
      access_token: _this._accessToken.token.access_token
    }, function (err, data) {
      callbackFunc(data);
    });
  },

  authorize_url: function(opts){},

  authenticate_with_credentials: function(username, password, callbackFunc){
    var _this = this;
    
    _this._adapterInstance.Password.getToken({
      username: username,
      password: password
    }, saveToken);

    // Save the access token
    function saveToken(error, result) {
      if (error) { console.log('Access Token Error', error.message); }
      // create a new token
      _this._accessToken = _this._adapterInstance.AccessToken.create(result);
      // save access token in memory
      Podio.access_token = _this._accessToken.token.access_token;
      callbackFunc.call(_this, _this._accessToken);
    }
  },
  
  authenticate_with_auth_code: function(authorization_code, callbackFunc){

  },
  authenticate_with_app: function(app_id, app_token, callbackFunc) {
    throw new Podio.Errors.DoesNotImplemented();
  },
  authenticate_with_transfer_token: function(){
    throw new Podio.Errors.DoesNotImplemented();
  },
  authenticate_with_sso: function(){
    throw new Podio.Errors.DoesNotImplemented();
  },
  authenticate_with_openid: function(){
    throw new Podio.Errors.DoesNotImplemented();
  },
  authenticate_with_activation_code: function(){
    throw new Podio.Errors.DoesNotImplemented();
  },

};

module.exports = function( P ){
  Podio = P;
  return new SimpleOAuth2Adapter();
};

