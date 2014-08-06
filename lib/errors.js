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

var Errors = [
  /**
   * Exception that indicates that the token is invalid
   * 
   * @function InvalidAccessToken
   * @memberof Podio
   * @type {Exception}
   * @instance
   * @public
   */
  function InvalidAccessToken(msg) {
    this.message = msg || 'Invalid access token';
    this.name = 'Podio.InvalidAccessToken';
  },
  /**
   * Exception indicating that the module is incorrect
   * 
   * @function InvalidModule
   * @memberof Podio
   * @type {Exception}
   * @instance
   * @public
   */
  function InvalidModule(msg) {
    this.message = msg || 'invalid module';
    this.name = 'Podio.InvalidModule';
  },
  /**
   * Exception indicating that something has not yet been implemented
   *
   * @function DoesNotImplemented
   * @memberof Podio
   * @type {Exception}
   * @instance
   * @public
   * @example
   * ...
   * function someFuncNotImplemented() {
   *   // shows default "message"
   *   throw new Podio.DoesNotImplemented();
   *   // or
   *   // shows specific "message"
   *   throw new Podio.DoesNotImplemented("Specific message!");
   * }
   * ...
   * try {
   *   someFuncNotImplemented();
   * } catch ( err ) {
   *   if ( err instanceof Podio.DoesNotImplemented ) {
   *     console.log('DoesNotImplemented error!');
   *   }
   * }
   */
  function DoesNotImplemented(msg){
    this.message = msg || 'Method is not implemented';
    this.name = 'Podio.DoesNotImplemented';
  },
  /**
   * Exception that indicates that a parameter is missing
   *
   * @function MissingRequiredParameter
   * @memberof Podio
   * @type {Exception}
   * @instance
   * @public
   */
  function MissingRequiredParameter(msg) {
    this.message = msg || 'Missing required parameter';
    this.name = 'Podio.MissingRequiredParameter';
  }
];

// extends with Error class
var ErrorsObject = {};
for(var err in Errors) {
  var errFunc = Errors[err];
  //errFunc.prototype.__proto__ = Error.prototype;
  errFunc.prototype.constructor = new Error();
  ErrorsObject[errFunc.name] = errFunc;
}

module.exports = ErrorsObject;

