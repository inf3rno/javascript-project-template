var math = require("../index");

describe("math", function () {

    it("describes four basic operations", function () {
        expect(math.add(math.multiply(2, 3), math.divide(8, 2), math.subtract(5, 2))).toBe(13);
    });

});