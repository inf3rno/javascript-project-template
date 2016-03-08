var argv = require("yargs").argv;
var group = argv._[0];

var groups = {
    "build": ["tasks/*.js", {
        "build": ["browserify"],
        "browserify": ["clean"]
    }]
};

require("gulp-task-file-loader").apply(null, groups[group]);