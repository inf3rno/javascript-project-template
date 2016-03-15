module.exports = function (config) {
    config.set({
        basePath: "",
        plugins: [
            "karma-browserify",
            "karma-phantomjs-launcher",
            "karma-firefox-launcher",
            "karma-mocha"
        ],
        frameworks: ["browserify", "mocha"],
        files: [
            "yadda.karma.js",
            "index.js",
            "src/**/*",
            "test/helpers/**/*",
            "test/features/**/*.js",
            {pattern: "test/features/**/*.feature", included: false}
        ],
        preprocessors: {
            "yadda.karma.js": ["browserify"],
            "index.js": ["browserify"],
            "src/**/*": ["browserify"],
            "test/helpers/**/*": ["browserify"],
            "test/features/**/*.js": ["browserify"]
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
        captureTimeout: 60000,
        singleRun: false
    });
};