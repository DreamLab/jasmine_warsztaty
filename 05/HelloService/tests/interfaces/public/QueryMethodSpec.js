var core          = require('core');
var JsonRpcMethod = core.jsonrpc.JsonRpcMethod;
var Event         = core.event.Event;
var ErrorEvent    = core.event.ErrorEvent;
var rewire        = require('rewire');

var modulePath = '../../../lib/interfaces/public/QueryMethod.js';


describe('QueryMethod', function () {
    var QueryMethodMock;
    var QueryMethod;

    beforeEach(function () {
        QueryMethodMock = rewire(modulePath);
        QueryMethod = QueryMethodMock.QueryMethod;

        this.instance = new QueryMethod();
    });

    describe('execute', function () {
        beforeEach(function () {
            var Loader = QueryMethodMock.__get__('Loader');
            spyOn(Loader.prototype, 'load').andCallFake(function () {
                this.dispatchEvent(new Event(Loader.Event.LOADED, {data: 'ok'}));
            });

            spyOn(this.instance, 'dispatchEvent');
        });

        describe('when loading successful', function () {
            beforeEach(function () {
                this.instance.execute({url: 'http://www.onet.pl'})
            });

            it('should dispatch event', function () {
                expect(this.instance.dispatchEvent).toHaveBeenCalled();
            });

            it('should dispatch event once', function () {
                expect(this.instance.dispatchEvent.callCount).toEqual(1);
            });

            it('should dispatch event type OK', function () {
                var event = this.instance.dispatchEvent.mostRecentCall.args[0];
                expect(event.type).toEqual(JsonRpcMethod.Event.OK);
            });
        });
    });
});
