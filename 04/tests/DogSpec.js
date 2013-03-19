var rewire = require('rewire');
var modulePath = '../Dog.js';

describe('Dog', function () {
    var DogMock;
    var Dog;

    beforeEach(function () {
        DogMock = rewire(modulePath);
        Dog     = DogMock.Dog;

        this.instance = new Dog();
    });

    describe('fetch', function () {
        var Fetcher = null;

        beforeEach(function () {
            Fetcher = DogMock.__get__('Fetcher');
        });

        describe('when error', function () {
            beforeEach(function () {
                spyOn(Fetcher.prototype, 'load').andCallFake(function (callback) {
                    callback('error', null);
                });
                this.callback = jasmine.createSpy('fetch_callback');
                this.instance.fetch(this.callback);
            });

            it('should spawn callback', function () {
                expect(this.callback).toHaveBeenCalled();
            });

            it('should spawn callback with false', function () {
                expect(this.callback).toHaveBeenCalledWith(false);
            });
        });
    });
});
