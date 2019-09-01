"use strict";
// ArrayGrouper
// Instances of this class used to handle logic of grouping arrays into smaller arrays
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayGrouper = /** @class */ (function () {
    function ArrayGrouper() {
    }
    //swap the value at the left index with the value at the right index
    ArrayGrouper.prototype.groupArrayElements = function (arr, n) {
        // make a copy of input array + find how many times n goes into its length
        var copy = arr.slice();
        var arrSize = Math.floor(copy.length / n);
        var remainder = copy.length % n;
        var res = new Array(n);
        // splice the input array copy into return value
        for (var i = 0; i < n; i++) {
            // extra elements to child arrays at the start of the parent array
            if (i < remainder) {
                res[i] = copy.splice(0, arrSize + 1);
            }
            else {
                res[i] = copy.splice(0, arrSize);
            }
        }
        return res;
    };
    return ArrayGrouper;
}());
exports.ArrayGrouper = ArrayGrouper;
