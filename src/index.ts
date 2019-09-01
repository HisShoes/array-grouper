import { ArrayGrouper } from './ArrayGrouper';

const p = new ArrayGrouper();

// Grouper should have a function to parse our array as expected.
interface Grouper {
  groupArrayElements(arr: number[], n: number): number[][];
}

// Run to see the results of parsing some arrays
function run(p: Grouper) {
  console.log(p.groupArrayElements([1, 2, 3, 4, 5, 6], 3));
  console.log(p.groupArrayElements([1, 2, 3, 4, 5], 3));
  console.log(p.groupArrayElements([1, 2, 3, 4], 3));
  console.log(p.groupArrayElements([1, 2], 3));
}

run(p);
