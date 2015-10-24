# math - Project template for karma + browserify + jasmine + gulp.

[![Build Status](https://travis-ci.org/inf3rno/javascript-project-template.png?branch=master)](https://travis-ci.org/inf3rno/javascript-project-template)

## Install

 - Copy the project template to the root of a new project.
 - Override the author name in the license file and in the readme file.
 - Override the project name and description in the package.json file.
 - Override project urls in the package.json and in the readme file e.g. in the travis icon loader.
 - Override the license file and the license section in the readme file if you want a different one.
 - Install node modules with `npm install`.
 - Enable git.

## Usage

### npm scripts

 - `npm run dev` - Development test with karma and auto-watch. An alternative solution to use the Webstorm test runner with jasmine and test the code in node.
 - `npm run release` - Builds, tests and publishes the lib on npm.
 - `npm run build` - Builds dist/bundle.js for browser usage.
 - `npm run build-for-manual-testing` - Builds the dist/bundle-with-tests.js file for browser testing with the jasmine.html. Some of the karma launchers are buggy in certain conditions, e.g. IE and Opera by Windows, so manual testing can be required.
 - `npm run test` - Tests code in node with jasmine and in different browsers with karma, browserify and jasmine.
 - `npm run test-browser` - Tests code only in the browser with karma, browserify and jasmine.
 - `npm run test-node` - Test code in node with jasmine.

### libs

#### travis

 - Node.js 4.x is set.
 - Travis will run `npm install`, `npm build` and `npm test` in this order.

#### gulp

 - I use my gulp task file loader, every task in a separate file in the tasks directory.

#### karma

 - Karma runs tests currently with PhantomJS.
 - You can add further browsers in the karma.conf.js by adding their plugins and adding the names to the browsers array.
 - By default it tests the index.js and the files from the src and spec folders.

#### jasmine

 - Default config.
 - Helpers not supported yet.

#### browserify

 - Default config.

## release logs

2015-10-22, v0.1.0

 - Feature: Add travis file.
 - Feature: Add npm scripts for test, build and release.
 - Feature: Add gulp build for browser usage.
 - Feature: Add gulp build for manual testing and a manual jasmine test runner.
 - Feature: Add dev test runner with karma-browserify and auto-watch.
 - Feature: Add a package.json.
 - Feature: Write example source code and jasmine tests.

## License

MIT - 2015 László Lajos Jánszky