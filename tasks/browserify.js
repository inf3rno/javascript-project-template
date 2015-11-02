var browserify = require("browserify"),
    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer"),
    uglify = require("gulp-uglify"),
    gulp = require("gulp"),
    globby = require("globby"),
    sourcemaps = require("gulp-sourcemaps");

module.exports = function () {
    return browserify({
        entries: globby.sync(["index.js", "src/**/*.js"]),
        debug: true
    })
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("dist"));
};