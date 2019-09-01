## Requirement

Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N
equally sized arrays.

Where the size of the original array cannot be divided equally by N, the final part should have a length equal to the remainder.

### Example

```
groupArrayElements([1,2,3,4,5], 3)
```

output:

```
[ [1,2], [3,4], [5] ]
```

### Comment

I'm not sure the requirement matches the example here - the example looks like an attempt at making 3 equally sized arrays and the third one is just getting as many as it can. The "written" version of the requirement suggests to me that the expected output would be something like:

```
[ [1], [2], [3,4,5] ]

// Or since this still means the length of the final part != the length of the remainder, the below is what I was expecting on initially reading the requirement:

[ [1], [2], [3], [4,5] ]
```

I'm going to assume the example is the way the function is intended to work but wanted to make sure my assumption was known.

## Instructions

- Have git and Node installed
- Clone this repo
- Navigate to folder in terminal
- Run command `npm install`
- Use npm scripts:
  - `npm dev` - compiles typescript to js and watches src folder to rebuild and run
  - `npm test` - run unit tests to see output
  - `npm run` - run the build folder once

## Solution

Uses typescript to provide typing and interfaces for a class (ArrayGrouper) that implements a function (groupArrayElements) with the desired logic.

The behaviour is to make `n` arrays of as near to equal size as possible. The first `r` arrays (where `r` is the remainder of `array.length / n`) will have an extra element.

The function was written in a functional style and wrapped in an object to make use of type script objects and give the opportunity to use dependency injection.

### Usage

```
const p = new ArrayGrouper();

const output = p.groupArrayElements([1, 2, 3, 4, 5], 3);

```
