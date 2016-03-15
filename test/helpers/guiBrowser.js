var Browser = require("./Browser"),
    gui = require("../../src/gui");

module.exports = new Browser({
    document: document,
    adapter: {
        setup: function (done) {
            gui.boot();
            done();
        },
        teardown: function (done) {
            gui.destroy();
            done();
        }
    }
});