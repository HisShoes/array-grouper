"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayParser_1 = require("./ArrayParser");
var chai = __importStar(require("chai"));
var expect = chai.expect;
describe('Array Parser', function () {
    var p = new ArrayParser_1.ArrayParser();
    it('can parse with no remainders', function () {
        var result = p.parse([1, 2, 3, 4, 5, 6], 3);
        expect(result.length).to.be.equal(2);
    });
    it('can handle uneven amounts', function () {
        var result = p.parse([1, 2, 3, 4, 5], 3);
        expect(result.length).to.be.equal(2);
    });
    it('can handle smaller array than n', function () {
        var result = p.parse([1, 2], 3);
        expect(result.length).to.be.equal(1);
    });
});
