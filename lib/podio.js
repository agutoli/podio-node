/**
 * Node wrapper to Podio API
 *
 * @author       Bruno Thiago Leite Agutoli <bruno.agutoli@gmail.com>
 * @version      Release: 0.0.1
 * @license      http://www.gnu.org/licenses/gpl.html GNU GENERAL PUBLIC LICENSE
 * @see          https://developers.podio.com/ 
 */

/*jshint node: true */
'use strict';

var Errors = require('./errors');
var extend = require('node.extend');

/**
 * Node client for Podio API.
 *
 * @namespace Podio
 * @throws {Podio.MissingRequiredParameter}
 */
function Podio( options ) {

  this.access_token = null;
  this.adapter = {};

  if (!options.api_key) {
    throw new Errors.MissingRequiredParameter(' Param "api_key" is required! ');
  }

  if (!options.api_secret) {
    throw new Errors.MissingRequiredParameter(' Param "api_secret" is required! ');
  }

  if (!options.services) {
    throw new Errors.MissingRequiredParameter(' Param "services" is required! ');
  }

  this._options = {
    version: '1.0',
    api_key: null,
    api_secret: null,
    api_auth_url: 'https://podio.com',
    api_url: 'https://api.podio.com',
    services: [],
    adapter: 'oauth'
  };

  // merge exception classes
  extend(this, Errors); 
  // merge options with defaults  
  extend(this._options, options);

  // add class base
  this._options.services.unshift('base');
  this._init();
}

Podio.prototype = {
  /**
   * Initializes the objects and modules needed
   *
   * @function Podio._init
   * @memberof Podio
   * @param  {void}
   * @return {object} Podio object
   * @throws {Podio.InvalidModule}
   * @private
   */
  _init: function(){
    var _this = this;

    // set adapter
    extend(this, require('./adapters/'+ this._options.adapter)(this));
    // adapter init
    this.AdapterSetup();

    // include services
    this._options.services.forEach(function(module) {
      var prefixPath = './services/'+ _this._options.version;
      try {
        require(prefixPath + '/' + module)(_this);
      } catch (e) {
        throw new Errors.InvalidModule('Unable to import module "'+ module +'"');
      }
    });
  },
  /**
   * Podio.register
   *
   * @desc Registers an object module to Podio
   *
   * @memberof Podio
   * @param  {string} namespace - Namespace ex. Podio.my_namespace.[my_module]
   * @param  {object} moduleObject - module object
   * @return {object} Podio object
   * @private
   */
  _register: function(namespace, moduleObject){
    this[namespace] = moduleObject;
    return this;
  },
};

module.exports = function(opts) {
  return new Podio(opts);
};

