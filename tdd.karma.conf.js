module.exports = function (config) {
    config.set({
        plugins: [
            "karma-browserify",
            "karma-phantomjs-launcher",
            "karma-firefox-launcher",
            "karma-mocha"
        ],
        frameworks: ["browserify", "mocha"],
        files: [
            "index.js",
            "src/**/*",
            "test/**/*"
        ],
        exclude: [
            "test/features/**/*"
        ],
        preprocessors: {
            "index.js": ["browserify"],
            "src/**/*": ["browserify"],
            "test/**/*": ["browserify"]
        },
        client: {
            mocha: {
                reporter: "html",
                ui: "bdd"
            }
        },
        browserify: {
            debug: true
        },
        browsers: ["PhantomJS", "Firefox"],
        reporters: ["progress"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        captureTimeout: 6000,
        singleRun: false
    });
};