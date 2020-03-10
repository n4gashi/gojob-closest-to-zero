"use strict";
exports.__esModule = true;
var closestToZero_1 = require("./closestToZero");
// when input is [8, 5, 10] it must returns 5
// when input is [5, 4, -9, 6, -10, -1, 8] it must return -1
// when input is [8, 2, 3, -2] it must return 2
// when input is [2, 0], it must returns 0, as 0 is ... the closest number to 0
console.log('Closest to zero among [5, 4, -9, 6, -10, -1, 8] : ');
console.log(closestToZero_1["default"]([5, 4, -9, 6, -10, -1, 8]));
//# sourceMappingURL=index.js.map