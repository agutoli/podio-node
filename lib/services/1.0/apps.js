/**
 * Node wrapper to Podio API
 *
 * @module    services/apps
 * @author    Bruno Thiago Leite Agutoli <bruno.agutoli@gmail.com>
 * @version   Release: 0.0.1
 * @license   http://www.gnu.org/licenses/gpl.html GNU GENERAL PUBLIC LICENSE
 * @see       https://developers.podio.com/
 * @see       https://developers.podio.com/doc/applications
 */

/*jshint node: true */
'use strict';

var Podio;
var NAMESPACE = 'apps'; //Podio.[namespace].[module_funcs]

/**
 * .
 * @file      apps.js
 * @name      Podio.apps
 * @namespace Podio.apps
 * @see       https://developers.podio.com/doc/applications
 */
function PodioApp( Podio ) {
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

PodioApp.prototype = {
  /** 
   * Returns a list of "Apps" 
   *
   * @memberof Podio.apps
   * @function Podio.apps.all
   * @param  {callback} callback - The callback that handles the response.
   * @example
   * var Podio = require('..')('..');
   * ... 
   * Podio.apps.all(function( apps ) {
   *   console.log('apps:', apps);
   * });
   * 
   * @return {object} PodioApp object
   */
  all: function(callbackFunc){
    var _this = this;
    Podio.request.GET('/app', function( app ){
      callbackFunc.call(app, app);
    });
  },
};

module.exports = function( P ){
  Podio = P._register(NAMESPACE, new PodioApp( Podio ));
};

