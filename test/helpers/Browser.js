var Browser = function (config) {
    this.document = config.document;
    this.adapter = config.adapter;
    this.setup = this.setup.bind(this);
    this.teardown = this.teardown.bind(this);
};
Browser.prototype = {
    constructor: Browser,
    setup: function (done) {
        if (this.document.readyState == "complete")
            this.adapter.setup(done);
        else
            this.document.onreadystatechange = function () {
                if (this.document.readyState == "complete")
                    this.adapter.setup(done);
            }.bind(this);
    },
    teardown: function (done) {
        this.adapter.teardown(done);
    },
    click: function (target) {
        var event;
        try {
            event = new MouseEvent('click', {
                'bubbles': true,
                'cancelable': true
            });
        }
        catch (e) {
            //phantomjs
            event = this.document.createEvent('MouseEvent');
            event.initEvent('click', true, true);
        }
        target.dispatchEvent(event);
    }
};

module.exports = Browser;