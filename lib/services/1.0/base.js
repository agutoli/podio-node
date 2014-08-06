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

var Podio;

var extend = require('node.extend');
/**
 * Class "containing" basic functions of lib
 * @ignore
 */
function PodioBase() {
  return {
    /**
     * 
     * @memberof Podio.base
     * @member {string} host
     */ 
    authorize_url: function(authorize_url){
      console.log('>> Client.authorize_url: ',authorize_url);
    },
    
    request: {
      GET: function(apiPath, callbackFunc){

        var params = {
          'apiPath': apiPath,
          'type': 'GET'
        };

        Podio.AdapterRequest(params, function(data){
          callbackFunc(data);
        });
      },
      
      POST: function(apiPath, callbackFunc){
        var params = {
          'apiPath': apiPath,
          'type': 'POST'
        };

        Podio.AdapterRequest(params, function(data){
          callbackFunc(data);
        });
      },

      PUT: function(apiPath, callbackFunc){
        var params = {
          'apiPath': apiPath,
          'type': 'PUT'
        };

        Podio.AdapterRequest(params, function(data){
          callbackFunc(data);
        });
      },

      DELETE: function(apiPath, callbackFunc){
        var params = {
          'apiPath': apiPath,
          'type': 'DELETE'
        };

        Podio.AdapterRequest(params, function(data){
          callbackFunc(data);
        });
      }
    }
  };
}

// podio base's function
module.exports = function( P ){
  Podio = P;
  extend(P, new PodioBase());
};

