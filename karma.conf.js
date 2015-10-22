module.exports = function (config) {
    config.set({
        plugins: [
            'karma-browserify',
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ],
        frameworks: ['browserify', 'jasmine'],
        files: [
            "index.js",
            "src/**/*.js",
            'spec/**/*.spec.js'
        ],
        preprocessors: {
            "index.js": ['browserify'],
            "src/**/*.js": ["browserify"],
            'spec/**/*.spec.js': ['browserify']
        },
        browserify: {
            debug: true
        },
        browsers: ['PhantomJS'],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        captureTimeout: 6000,
        singleRun: false
    });
};