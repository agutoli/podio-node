/**
 * Node wrapper to Podio API
 *
 * @module    services/contacts
 * @author    Bruno Thiago Leite Agutoli <bruno.agutoli@gmail.com>
 * @version   Release: 0.0.1
 * @license   http://www.gnu.org/licenses/gpl.html GNU GENERAL PUBLIC LICENSE
 * @see       https://developers.podio.com/
 * @see       https://developers.podio.com/doc/contacts
 */

/*jshint node: true */
'use strict';

var Podio;
var NAMESPACE = 'contacts'; //Podio.[namespace].[module_funcs]

/**
 * .
 * @file      contacts.js
 * @name      Podio.contacts
 * @namespace Podio.contacts
 * @see       https://developers.podio.com/doc/contacts
 */
function PodioContacts( Podio ) {
  this.name = null;
  this.avatar = null;
  this.bithday = null;
  this.organization = null;
  this.skype = null;
  this.about = null;
  this.address = null;
  this.zip = null;
  this.city = null;
  this.state = null;
  this.country = null;
  this.location = null;
  this.mail = null;
  this.phone = null;
  this.title = null;
  this.linkedin = null;
  this.twitter = null;
  this.url = null;
  this.skill = null;
}

PodioContacts.prototype = {
  /**
   * Podio.users.get
   *
   * @desc Gets the information about the current user along with Drive API settings
   *
   * @memberof Podio.contacts
   * @function Podio.contacts.all
   * @param  {callback} callback - The callback that handles the response.
   * @example
   * var Podio = require('..')('..');
   * ... 
   * Podio.contacts.all(function( contacts ) {
   *   console.log('contacts:', contacts);
   * });
   * 
   * @return {object} PodioContact object
   */
  all: function(callbackFunc){
    var _this = this;
    Podio.request.GET('/contact', function(contact){
      callbackFunc.call(contact, contact);
    });
  },
  /**
   * Function not implemented yet
   *
   * @function Podio.contacts.filter
   * @param  {string} attributes - Filters
   * @param  {callback} callback - The callback that handles the response.
   * @throws {Podio.DoesNotImplemented}
   * @todo Implement this function.
   */
  filter: function(attributes, callbackFunc){
    throw new Podio.DoesNotImplemented();
  },
};

module.exports = function( P ){
  Podio = P._register(NAMESPACE, new PodioContacts( Podio ));
};

