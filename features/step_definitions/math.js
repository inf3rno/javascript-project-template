var math = require("../../index"),
    assert = require("assert");

module.exports = function () {

    this.Given(/^I have (\w+) numbers$/, function (count, done) {
        this.numbers = [];
        var l = 2;
        if (count == "multiple")
            l = randomInteger(3, 10);
        for (var i = 0; i < l; ++i)
            this.numbers[i] = randomInteger(-100, 100);
        done();
    });

    this.When(/^I (\w+) .* numbers? .*$/, function (operatorName, done) {
        if (!math.hasOwnProperty(operatorName))
            throw new Error("Operator is not supported by the math lib: " + operatorName);
        this.operator = math[operatorName];
        this.result = this.operator.apply(math, this.numbers);
        done();
    });

    this.Then(/^I should get their (\w+) as result$/, function (resultType, done) {
        var expectedAlgorithms = {
            sum: function (a, b) {
                return a + b;
            },
            product: function (a, b) {
                return a * b;
            },
            difference: function (a, b) {
                return a - b;
            },
            quotient: function (a, b) {
                return a / b;
            }
        };
        if (!expectedAlgorithms.hasOwnProperty(resultType))
            throw new Error("Expectation about the result does not match with any known expectation.");
        var expectedAlgorithm = expectedAlgorithms[resultType];
        var expectedResult = this.numbers[0];
        for (var i = 1, l = this.numbers.length; i < l; ++i)
            expectedResult = expectedAlgorithm(expectedResult, this.numbers[i]);
        assert.strictEqual(this.result, expectedResult, "The actual and the expected results are not the same.");
        done();
    });
};

var randomInteger = function (min, max) {
    if (isNaN(min) || isNaN(max) || min % 1 || max % 1)
        throw new Error("Min and max must be integers.");
    return min + Math.floor(Math.random() * (max - min + 1));
};