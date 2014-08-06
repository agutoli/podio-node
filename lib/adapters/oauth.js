/**
 * Node wrapper to Podio API
 *
 * @module    adapters/oauth
 * @author    Bruno Thiago Leite Agutoli <bruno.agutoli@gmail.com>
 * @version   Release: 0.0.1
 * @license   http://www.gnu.org/licenses/gpl.html GNU GENERAL PUBLIC LICENSE
 * @see       https://developers.podio.com/ 
 */

/*jshint node: true */
'use strict';

var OAuth = require('oauth');

var Podio;
var OAuth2;

/**
 * Adapter for lib "oauth"
 * @see https://www.npmjs.org/package/oauth
 */
function OAuthAdapter() {
  this._accessToken = null;
  this._adapterInstance = null;
}

OAuthAdapter.prototype = {
  /**
   * Abstract function called in the podioClient
   *
   * @memberOf! OAuthAdapter
   * @param {void}
   * @return {object} OAuthAdapter object
   */
  AdapterSetup: function(){
    // API's keys
    var api_key = Podio._options.api_key;
    var api_secret = Podio._options.api_secret;

    this._adapterInstance = new OAuth.OAuth2(
        api_key, 
        api_secret, 
        Podio._options.api_url, 
        null, 
        '/oauth/token', 
        null
    );
    this._adapterInstance._useAuthorizationHeaderForGET = true;
  },

  /**
   * Function adapter for http request
   *
   * @memberOf! OAuthAdapter
   *
   * @param {object} params
   * @param {function} callbackFunc
   * @return {object} OAuthAdapter object
   */
  AdapterRequest: function(params, callbackFunc){
    var _this = this;
    var apiPath = params.apiPath || "";

    var uri = Podio._options.api_url + apiPath;
    _this._adapterInstance.get(uri, _this._accessToken.access_token, function(error, response) {
      if(error) throw new Error('Adapter: error occurred');
      callbackFunc(JSON.parse(response));
    });
    return this;
  },

  authorize_url: function(opts){},

  authenticate_with_credentials: function(username, password, callbackFunc){
    var _this = this;
    var options = { 
      'grant_type':'password', 
      'username': username, 
      'password': password
    };

    this._adapterInstance.getOAuthAccessToken('', options, 
      function (err, access_token, refresh_token, results) {

      if (err) {
        throw new Podio.InvalidAccessToken(err.message); 
      }

      _this._accessToken = {
        access_token: results.access_token,
        expires_in: results.expires_in,
      };

      callbackFunc.call(_this, _this._accessToken);
    });
    return options; 
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
  return new OAuthAdapter();
};

