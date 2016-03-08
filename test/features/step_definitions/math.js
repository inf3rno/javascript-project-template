var math = require("../../../index"),
    expect = require("expect.js"),
    randomInteger = require("../../helpers/randomInteger");

var numbers,
    operator,
    result;

module.exports =  function () {
    this.Given(/^I have (\w+) numbers$/, function (count, next) {
        numbers = [];
        var l = 2;
        if (count == "multiple")
            l = randomInteger(3, 10);
        for (var i = 0; i < l; ++i)
            numbers[i] = randomInteger(-100, 100);
        next();
    });

    this.When(/^I (\w+) .* numbers? .*$/, function (operatorName, next) {
        if (!math.hasOwnProperty(operatorName))
            throw new Error("Operator is not supported by the math lib: " + operatorName);
        operator = math[operatorName];
        result = operator.apply(math, numbers);
        next();
    });

    this.Then(/^I should get their (\w+) as result$/, function (resultType, next) {
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
        var expectedResult = numbers[0];
        for (var i = 1, l = numbers.length; i < l; ++i)
            expectedResult = expectedAlgorithm(expectedResult, numbers[i]);
        expect(result).to.be(expectedResult);
        next();
    });
};