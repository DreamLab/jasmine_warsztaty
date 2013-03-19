var core          = require('core');
var JsonRpcMethod = core.jsonrpc.JsonRpcMethod;
var rewire        = require('rewire');

var modulePath = '../../../lib/interfaces/public/QueryMethod.js';

describe('QueryMethod', function () {
    beforeEach(function () {
        /*
         * 1. uzyj rewire do zaladowania modulu
         * 2. utworz nowa instancje klasy QueryMethod
         */
    });

    describe('execute', function () {
        beforeEach(function () {
            /* 
             * 1. wyciagnij Loader z modulu QueryMethod
             * 2. zasymuluj dispatchEvent z metodzie load() klasy Loader
             * 3. przechwyc wywolanie dispatchEvent obiektu klasy QueryMethod
             */
        });

        describe('when loading successful', function () {
            beforeEach(function () {
                /*
                 * 1. wywolaj metode execute z parametrami
                 */
            });

            it('should dispatch event', function () {
            });

            it('should dispatch event once', function () {
            });

            it('should dispatch event type OK', function () {
            });
        });
    });
});
