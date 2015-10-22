var divide = require("../src/division");

describe("divide", function () {

    it("returns the quotient of 2 numbers", function () {
        expect(divide(2, 1)).toBe(2);
        expect(divide(2, 4)).toBe(0.5);
    });

});