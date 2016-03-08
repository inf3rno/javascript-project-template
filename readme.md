# math - Project template for karma + browserify + yadda + mocha + gulp.

[![Build Status](https://travis-ci.org/inf3rno/javascript-project-template.png?branch=master)](https://travis-ci.org/inf3rno/javascript-project-template)

## Install

 - Copy the project template to the root of a new project.
 - Override the author name in the license file and in the readme file.
 - Override the project name and description in the package.json file.
 - Override project urls in the package.json and in the readme file e.g. in the travis icon loader.
 - Override the license file and the license section in the readme file if you want a different one.
 - Install node modules with `npm install`.
 - Enable git.
 
### yadda modifications

 - The current version of yadda (0.17.1) is not compatible with karma! You need to modify the library this way: https://github.com/acuminous/yadda/issues/58#issuecomment-193975789 .

## Usage

### npm scripts

 - `npm run dev` - Runs BDD development script by default. It's just an alias.
 - `npm run dev-bdd` - Starts karma with a file watcher and with the BDD configuration.
 - `npm run dev-tdd` - Starts karma with a file watcher and with the TDD configuration.
 - `npm run build` - Runs all the tests and if the succeed then runs the gulp build script.
 - `npm run test` - Runs all the tests. It starts with the node tests and runs the karma tests only if the node tests succeed.
 - `npm run test-node` - Runs the BDD and TDD node tests.
 - `npm run test-karma` - Runs the BDD and TDD karma tests.
 - `npm run bdd` - Runs the BDD node and karma tests.
 - `npm run tdd` - Runs the TDD node and karma tests.
 - `npm run bdd-node` - Runs the BDD node tests, so mocha with the yadda plugin on the `test/features/*.feature` files.
 - `npm run bdd-karma` - Runs the BDD karma tests, so mocha with the yadda plugin browserified.
 - `npm run tdd-node` - Runs the TDD node tests, so mocha on the `test/*.spec.js` files.
 - `npm run tdd-karma` - Runs the TDD karma tests, so mocha browserified.
    
### libs

#### travis

 - Node.js 5.x is set.
 - Travis will run `npm install` and `npm test`.

#### gulp

 - I use my gulp task file loader, every task is in a separate file in the tasks directory.

#### karma

 - Karma runs tests currently with PhantomJS and Firefox.
 - You can add further browsers in the `bdd.karma.conf.js` or in the `tdd.karma.conf.js` by adding their plugins and adding the names to the browsers array.
 - By default it tests the `index.js` and the files from the `src` folder using the tests from the `test` folder.

#### yadda

 - Currently I am using a workaround in the `yadda.conf.js` to support an IntelliJ plugin. Details here: https://github.com/acuminous/yadda/issues/196 . Maybe the author writes the cucumber.js IntelliJ plugin for Yadda as well and we don't have to use the cucumber.js directory structure and step definition style. I sent an email to the author about this, but he did not respond yet.
 - Currently I am using a workaround in the `yadda` library to support the nodejs `fs` lib more or less by karma. Details here: https://github.com/acuminous/yadda/issues/58#issuecomment-193975789 . Maybe Yadda developers implement this feature in the future, so we don't have to patch the lib after installing it with npm.

#### mocha

 - Using `test/**/*.spec.js` test file names by TDD and `/test/features/*.feature` feature file names by BDD.
 - Helpers are supposed to be in the `test/helpers` directory by both BDD and TDD.

#### browserify

 - There is nothing surprising in the karma config files, it is the default config from examples.

## release logs

2016-03-08, v0.2.0

 - Feature: Replace npm scripts with new ones and removing the release script.
 - Feature: Transform jasmine and cucumber tests to mocha and yadda tests.
 - Feature: Write cucumber tests, add cucumber support.
 - Feature: Add source maps.

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