/**
 * Node wrapper to Podio API
 *
 * @module services/users
 * @author       Bruno Thiago Leite Agutoli <bruno.agutoli@gmail.com>
 * @version      Release: 0.0.1
 * @license      http://www.gnu.org/licenses/gpl.html GNU GENERAL PUBLIC LICENSE
 * @see          https://developers.podio.com/
 */

/*jshint node: true */
'use strict';

var Podio;
var NAMESPACE = 'users'; //Podio.[namespace].[module_funcs]

/**
 * .
 * @file users.js
 * @see https://developers.podio.com/doc/users
 * @name Podio.users
 * @namespace Podio.users
 */
function PodioUser() {
  this.user_id = null;
  this.mail = null;
  this.status = null;
  this.locale = null;
  this.timezone = null;
  this.created_on = null;
  this.activated_on = null;
  this.name = null;
  this.link = null;
  this.avatar = null;
  this.profile_id = null;
  this.mails = [{ 
    disabled: false,
    mail: null,
    verified: false,
    primary: false
  }];
  this.flags = []; 
}

PodioUser.prototype = {
  /**
   * Podio.users.get
   *
   * @desc Gets the information about the current user along with Drive API settings
   *
   * @function Podio.users.get
   * @memberof Podio.users
   * @param  {callback} callback - The callback that handles the response.
   * @return {object} PodioUser object
   */
  get: function(callbackFunc){
    var _this = this;
    Podio.request.GET('/user', function(user){
      callbackFunc.call(user, user);
    });
    return this;
  },
  /**
   * Podio.users.current
   *
   * @desc Gets the information about the current user along with Drive API settings
   * @function Podio.users.current
   * @alias Podio.users.get
   * @memberof Podio.users
   * @param  {callback} callback - The callback that handles the response.
   * @example
   * var Podio = require('..')('..');
   * ... 
   * // Example returning the current user
   * Podio.users.current(function( user ) {
   *   console.log('Mail:', this.mail);
   *   console.log('Mail:', user.mail);//alias 
   * });
   * 
   * // alias form
   * Podio.users.get(function( user ) {
   *   console.log('Mail:', this.mail);
   *   console.log('Mail:', user.mail);//alias 
   * });
   * @return {object} PodioUser object
   */
  current: function(callbackFunc){
    return this.get(callbackFunc);
  },
  /**
   * Function not implemented yet
   *
   * @function Podio.users.set_property
   * @param  {string} name - Property Name
   * @param  {string} value - Property value
   * @param  {callback} callback - The callback that handles the response.
   * @throws {Podio.DoesNotImplemented}
   * @todo Implement this function.
   */
  set_property: function(name, value, callbackFunc){
    throw new Podio.DoesNotImplemented();
  },
  /**
   * Function not implemented yet
   *
   * @function Podio.users.get_property
   * @param  {string} name - Property Name
   * @param  {callback} callback - The callback that handles the response.
   * @throws {Podio.DoesNotImplemented}
   * @todo Implement this function.
   */
  get_property: function(name, callbackFunc){
    throw new Podio.DoesNotImplemented();
  },
  /**
   * Function not implemented yet
   *
   * @function Podio.users.delete_property
   * @param  {string} name - Property Name 
   * @param  {callback} callback - The callback that handles the response.
   * @throws {Podio.DoesNotImplemented}
   * @todo Implement this function.
   */
  delete_property: function(name, callbackFunc){
    throw new Podio.DoesNotImplemented();
  },
  /**
   * Function not implemented yet
   *
   * @function Podio.users.set_properties
   * @param  {array} attributes - Array of object  
   * @param  {callback} callback - The callback that handles the response.
   * @throws {Podio.DoesNotImplemented}
   * @todo Implement this function.
   */
  set_properties: function(attributes, callbackFunc){
    throw new Podio.DoesNotImplemented();
  },
};

module.exports = function( P ){
  Podio = P._register(NAMESPACE, new PodioUser());
};

