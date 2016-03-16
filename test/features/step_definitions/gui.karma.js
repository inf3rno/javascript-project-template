var expect = require("expect.js"),
    browser = require("../../helpers/guiBrowser"),
    gui = require("../../../src/gui");

module.exports = function () {
    this.Given(/^I have a button$/, function (next) {
        browser.setup(next);
    });

    this.When(/^I click on the button$/, function (next) {
        browser.click(gui.button);
        next();
    });

    this.Then(/^I should trigger the click event listener$/, function (next) {
        expect(gui.buttonClickCount).to.equal(1);
        browser.teardown(next);
    });
};