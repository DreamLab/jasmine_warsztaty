var Loader  = require('core').http.Loader;
var Request = require('core').http.Request;


var Fetcher = function () {
};

Fetcher.prototype.load = function (callback) {
    this._callback = callback;
    var req    = new Request('http://w.jjelen.usr.f0.kopyto.dev.onet');
    var loader = new Loader(req);

    loader.addEventListener(Loader.Event.LOADED, this._onLoaded, this);
    loader.addEventListener(Loader.Event.ERROR, this._onError, this);
    loader.load();
};

Fetcher.prototype._onLoaded = function (event) {
    var data = event.data;
    var code = data.getStatusCode();

    if (code == 200) {
        var body = data.getBody().toUTF8String();
        this._callback(null, (body == '1'))
    } else {
        this._callback('Status Code not 200', null);
    }

};


Fetcher.prototype._onError = function (event) {
    this._callback('Loader error', null);
};

exports.Fetcher = Fetcher;
