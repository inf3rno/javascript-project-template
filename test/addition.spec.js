var expect = require("expect.js"),
    add = require("../src/addition");

describe("add", function () {

    it("returns the summary of the given numbers", function () {
        expect(add(1, 2)).to.be(3);
        expect(add(2, 3, 4)).to.be(9);
    });

});