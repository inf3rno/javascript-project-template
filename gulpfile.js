var argv = require("yargs").argv;
var group = argv._[0];

var groups = {
    "build": ["tasks/*.js", {
        "build": ["browserify"],
        "browserify": ["clean"]
    }],
    "build-for-manual-testing": ["tasks/*.js", {
        "build-for-manual-testing": ["browserify-with-tests"],
        "browserify-with-tests": ["clean"]
    }]
};

require("gulp-task-file-loader").apply(null, groups[group]);