var add = require("./addition");

module.exports = function (a, b) {
    return add(a, -b);
};