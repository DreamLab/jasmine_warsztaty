var Sun = require('./Sun.js').Sun;


describe('Sun', function () {
    beforeEach(function () {
        this.instance = new Sun();
    });

    describe('during day', function () {
        beforeEach(function () {
            spyOn(this.instance, 'getTime').andReturn(14);
        });

        it('should shine', function () {
            expect(this.instance.isShining()).toBeTruthy();
        });
    });

    describe('during night', function () {
        beforeEach(function () {
            spyOn(this.instance, 'getTime').andReturn(4);
        });

        it('should not shine', function () {
            expect(this.instance.isShining()).toBeFalsy();
        });
    });
});
