# Array Grouping

## Requirements
Given an array of length >= 0, and a positive integer N, return the contents of the array divided into
N equally sized arrays.

Where the size of the original array cannot be divided equally by N, the final part should have a
length equal to the remainder.

## Assumptions & Edge Cases

* Assumption is that the example works the way it is intended - Usually that holds up in the "real world". The requirements had a bit of ambiguity, could have worked a couple of different ways
* In the edge case where the array is smaller than the number of groups requested - return the array as one "remainder group". Other ways this could have worked - throw an error or return the right number of groups with some empty groups

Might have overthought these edge cases, but one is based on the example given and one is my interpretation of the requirements. Seems likely only one of these is right but wanted to provide options

Based on the example - all groups are a minimum of size floor (array.length / N), with any additional elements placed in the final group
```typescript
expect(groupArray([1, 2, 3, 4, 5], 4)).toEqual([[1], [2], [3], [4, 5]]);
```

"Where the size of the original array cannot be divided equally by N, the final part should have a length equal to the remainder" - the groups excluding the last have as many elements as possible while staying equal, the final group contains the remainder and might be smaller than the others
```typescript
expect(groupArray([1, 2, 3, 4, 5], 3)).toEqual([[1, 2], [3, 4], [5]]);
```


## Getting Started
### Using npm

```bash
npm install
npm run test
npm run dev
```

### Using Bun

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```
To test:

```bash
bun test
```

This project was created using `bun init` in bun v1.3.0. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
