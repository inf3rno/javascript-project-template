var add = require("../src/addition");

describe("add", function () {

    it("returns the summary of the given numbers", function () {
        expect(add(1, 2)).toBe(3);
        expect(add(2, 3, 4)).toBe(9);
    });

});