/**
 * @overview GetMethod
 * @copyright Dreamlab Onet.pl sp. z. o o 2012
 */

var JsonRpcMethod = require('core').jsonrpc.JsonRpcMethod;
var Event = require('core').event.Event;
var ErrorEvent = require('core').Event.ErrorEvent;
var Request = require('core').http.Request;
var Loader = require('core').http.Loader;

/**
 * @class Response
 * @classdesc Simple Get Method
 * @extends JsonRpcMethod
 *
 * @requires JsonRpcMethod
 * @requires Event
 *
 * @return {GetMethod}
 */
var QueryMethod = function(request, response, server) {
    JsonRpcMethod.call(this, request, response, server);
};

QueryMethod.prototype = Object.create(JsonRpcMethod.prototype);

/**
 * Execute get method
 *
 * @param {Object} params
 * @return {undefined}
 * @method
 * @fires JsonRpcMethod.Event.OK
 */
QueryMethod.prototype.execute = function(params) {
    var request = new Request(params.url);
    var loader  = new Loader(request);
    
    loader.addEventListener(Loader.Event.LOADED, this._onLoaderComplete, this);
    loader.addEventListener(Loader.Event.ERROR, this._onLoaderError, this);
    loader.setTimeout(1000);
    loader.load()
};

QueryMethod.prototype._onLoaderComplete = function (e) {
    var retEvent = new Event(JsonRpcMethod.Event.OK, e.data.toJson());
    this.dispatchEvent(retEvent);
};

QueryMethod.prototype._onLoaderError = function (e) {
    var retEvent = new ErrorEvent(e.data, e.code, e.message);
    this.dispatchEvent(retEvent);
}

exports.QueryMethod = QueryMethod;
