var browserify = require("browserify"),
    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer"),
    uglify = require("gulp-uglify"),
    gulp = require("gulp"),
    globby = require("globby");

module.exports = function () {
    return browserify({
        entries: globby.sync(["index.js", "src/**/*.js"])
    })
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
};