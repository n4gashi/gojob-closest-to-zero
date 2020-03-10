"use strict";
exports.__esModule = true;
var closestToZero = function (numbers) {
    // If the input array is undefined or empty
    // the function returns 0
    if (numbers == null || !numbers.length) {
        return 0;
    }
    return numbers.reduce(function (candidate, x) {
        if (candidate === 0 || x === 0) {
            return 0;
        }
        // If current number is POSITIVE
        // and inferior or equal to current candidate
        // In this setup, can't be inferior to 0
        if (x > 0 && x <= Math.abs(candidate)) {
            return x;
        }
        // If current number is NEGATIVE
        // and abs x is inferior to abs current candidate
        // (and closest to 0 by definition)
        if (x < 0 && -x < Math.abs(candidate)) {
            return x;
        }
        return candidate;
    }) || 0; // Making sure that any non-truthy value is replaced by 0
};
exports["default"] = closestToZero;
//# sourceMappingURL=closestToZero.js.map