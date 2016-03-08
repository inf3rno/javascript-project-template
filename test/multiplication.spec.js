var expect = require("expect.js"),
    multiply = require("../src/multiplication");

describe("multiply", function () {

    it("returns the product of the given numbers", function () {
        expect(multiply(1, 2)).to.be(2);
        expect(multiply(2, 3, 4)).to.be(24);
    });

});