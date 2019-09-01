"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayGrouper_1 = require("./ArrayGrouper");
var p = new ArrayGrouper_1.ArrayGrouper();
// Run to see the results of parsing some arrays
function run(p) {
    console.log(p.groupArrayElements([1, 2, 3, 4, 5, 6], 3));
    console.log(p.groupArrayElements([1, 2, 3, 4, 5], 3));
    console.log(p.groupArrayElements([1, 2, 3, 4], 3));
    console.log(p.groupArrayElements([1, 2], 3));
}
run(p);
