var expect = require("expect.js"),
    browser = require("../helpers/guiBrowser"),
    gui = require("../../src/gui");

describe("gui", function () {

    before(browser.setup);
    after(browser.teardown);

    it("some gui tests", function () {
        browser.click(gui.button);
        expect(gui.buttonClickCount).to.equal(1);
    });

});