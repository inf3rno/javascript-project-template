var program = require("commander");
program.parse(process.argv);

var group = program.args[0];

var groups = {
    "build": ["tasks/*.js", {
        "build": ["browserify"],
        "browserify": ["clean"]
    }]
};

require("gulp-task-file-loader").apply(null, groups[group]);