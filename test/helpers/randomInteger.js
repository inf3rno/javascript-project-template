module.exports = function (min, max) {
    if (isNaN(min) || isNaN(max) || min % 1 || max % 1)
        throw new Error("Min and max must be integers.");
    return min + Math.floor(Math.random() * (max - min + 1));
};