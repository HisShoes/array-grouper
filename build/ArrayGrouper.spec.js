"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayGrouper_1 = require("./ArrayGrouper");
var chai = __importStar(require("chai"));
var expect = chai.expect;
describe('Array Parser', function () {
    var p = new ArrayGrouper_1.ArrayGrouper();
    it('will return 3 equally sized arrays', function () {
        var result = p.groupArrayElements([1, 2, 3, 4, 5, 6], 3);
        //check overall length
        expect(result.length).to.be.equal(3);
        //check length of individual sub arrays
        expect(result[0].length).to.be.equal(2);
        expect(result[1].length).to.be.equal(2);
        expect(result[2].length).to.be.equal(2);
    });
    it('will return 2 equal arrays, and one with whats left', function () {
        var result = p.groupArrayElements([1, 2, 3, 4, 5], 3);
        //check overall length
        expect(result.length).to.be.equal(3);
        //check length of individual sub arrays
        expect(result[0].length).to.be.equal(2);
        expect(result[1].length).to.be.equal(2);
        expect(result[2].length).to.be.equal(1);
    });
    it('will handle smaller array than n', function () {
        var result = p.groupArrayElements([1, 2], 3);
        //check overall length
        expect(result.length).to.be.equal(3);
        //check length of individual sub arrays
        expect(result[0].length).to.be.equal(1);
        expect(result[1].length).to.be.equal(1);
        expect(result[2].length).to.be.equal(0);
    });
});
