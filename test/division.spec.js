var expect = require("expect.js"),
    divide = require("../src/division");

describe("divide", function () {

    it("returns the quotient of 2 numbers", function () {
        expect(divide(2, 1)).to.be(2);
        expect(divide(2, 4)).to.be(0.5);
    });

});