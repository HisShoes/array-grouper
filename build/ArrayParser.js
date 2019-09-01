"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayParser = /** @class */ (function () {
    function ArrayParser() {
    }
    //swap the value at the left index with the value at the right index
    ArrayParser.prototype.parse = function (arr, n) {
        var numElements = arr.length / n;
        var res = [];
        for (var i = 0; i < numElements; i++) {
            var adjustedIndex = i * n;
            res.push(arr.slice(adjustedIndex, adjustedIndex + n));
        }
        return res;
    };
    return ArrayParser;
}());
exports.ArrayParser = ArrayParser;
