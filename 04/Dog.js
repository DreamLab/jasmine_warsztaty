var Fetcher = require('./Fetcher.js').Fetcher;

var Dog = function () {
};

Dog.prototype.fetch = function (callback) {
    var myFetcher = new Fetcher(this);

    myFetcher.load(function (err, data) {
        if (err) {
            return callback(false);
        } 

        return callback(data);
    });
};

exports.Dog = Dog;
