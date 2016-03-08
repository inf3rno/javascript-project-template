// shim platform : is_browser...

var Yadda = require("yadda");
Yadda.plugins.mocha.StepLevelPlugin.init();

var English = Yadda.localisation.English;
var library = English.library();
library.Given = library.given;
library.When = library.when;
library.Then = library.then;

var defineSteps = require("./test/features/step_definitions/math");
defineSteps.call(library);


new Yadda.FeatureFileSearch("./test/features").each(function (file) {

    featureFile(file, function (feature) {

        var yadda = Yadda.createInstance(library);

        scenarios(feature.scenarios, function (scenario) {
            steps(scenario.steps, function (step, done) {
                yadda.run(step, done);
            });
        });
    });
});
