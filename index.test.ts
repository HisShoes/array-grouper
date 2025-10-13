import { describe, expect, it } from "bun:test";
import { groupArray } from ".";

describe("groupArray", () => {
    it("groups array with no remainder", () => {
        expect(groupArray([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2], [3, 4], [5, 6]]);
    });
    it("groups array with remainder", () => {
        expect(groupArray([1, 2, 3, 4, 5], 3)).toEqual([[1, 2], [3, 4], [5]]);
    });

    it("groups array with remainder to leave last array smaller", () => {
        expect(groupArray([1, 2, 3, 4, 5], 4)).toEqual([[1], [2], [3], [4, 5]]);
    });

    it("groups array with less than group size", () => {
        expect(groupArray([1, 2, 3], 99)).toEqual([[1, 2, 3]]);
    });
});