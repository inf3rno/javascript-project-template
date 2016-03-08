var expect = require("expect.js"),
    subtract = require("../src/subtraction"),
    add = require("../src/addition"),
    multiply = require("../src/multiplication");

describe("subtract", function () {

    it("returns the difference of 2 numbers", function () {
        expect(subtract(1, 2)).to.be(add(1, multiply(-1, 2)));
        expect(subtract(5, 3)).to.be(add(5, multiply(-1, 3)));
    });

});