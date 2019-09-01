// ArrayGrouper
// Instances of this class used to handle logic of grouping arrays into smaller arrays

export class ArrayGrouper {
  //swap the value at the left index with the value at the right index
  groupArrayElements(arr: number[], n: number): number[][] {
    // make a copy of input array + find how many times n goes into its length
    let copy = arr.slice();
    let arrSize = Math.floor(copy.length / n);
    let remainder = copy.length % n;
    let res = new Array(n);

    // splice the input array copy into return value
    for (let i = 0; i < n; i++) {
      // extra elements to child arrays at the start of the parent array
      if (i < remainder) {
        res[i] = copy.splice(0, arrSize + 1);
      } else {
        res[i] = copy.splice(0, arrSize);
      }
    }

    return res;
  }
}
