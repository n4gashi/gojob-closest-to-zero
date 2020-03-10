"use strict";
exports.__esModule = true;
var closestToZero_1 = require("./closestToZero");
;
test('works with an array of positive integers', function () {
    var subject = [8, 5, 10];
    var result = closestToZero_1["default"](subject);
    expect(result).toBe(5);
});
test('works with an array of mixed integers', function () {
    var subject = [5, 4, -9, 6, -10, -1, 8];
    var result = closestToZero_1["default"](subject);
    expect(result).toBe(-1);
});
test('prioritizes the positive number if both pos and neg match', function () {
    var subject = [8, 2, 3, -2];
    var result = closestToZero_1["default"](subject);
    expect(result).toBe(2);
});
test('prioritizes 0', function () {
    var subject = [2, 0];
    var result = closestToZero_1["default"](subject);
    expect(result).toBe(0);
});
test('returns 0 if array is empty', function () {
    var subject = [];
    var result = closestToZero_1["default"](subject);
    expect(result).toBe(0);
});
test('returns 0 if array has just a single falsy value', function () {
    var subject = [undefined];
    var result = closestToZero_1["default"](subject);
    expect(result).toBe(0);
});
test('returns 0 if array is null', function () {
    var subject = null;
    var result = closestToZero_1["default"](subject);
    expect(result).toBe(0);
});
//# sourceMappingURL=closestToZero.test.js.map