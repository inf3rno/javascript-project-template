var Yadda = require("yadda");
Yadda.plugins.mocha.StepLevelPlugin.init();

var English = Yadda.localisation.English;

var path = require("path");
var mods = {
    "./test/features/step_definitions/math": require("./test/features/step_definitions/math"),
    "./test/features/step_definitions/gui": require("./test/features/step_definitions/gui")
};

new Yadda.FeatureFileSearch("./test/features").each(function (file) {
    featureFile(file, function (feature) {

        var stepsFile = String("./" + path.dirname(file) + "/step_definitions/" + path.basename(file, ".feature")).split("\\").join("/");

        var library = English.library();
        library.Given = library.given;
        library.When = library.when;
        library.Then = library.then;

        var defineSteps = mods[stepsFile];
        defineSteps.call(library);

        var yadda = Yadda.createInstance(library);

        scenarios(feature.scenarios, function (scenario) {
            steps(scenario.steps, function (step, done) {
                yadda.run(step, done);
            });
        });
    });
});
