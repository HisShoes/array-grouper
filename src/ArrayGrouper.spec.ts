import { ArrayGrouper } from './ArrayGrouper';

import * as chai from 'chai';

const expect = chai.expect;

describe('Array Parser', () => {
  const p = new ArrayGrouper();

  it('will return 3 equally sized arrays', () => {
    let result = p.groupArrayElements([1, 2, 3, 4, 5, 6], 3);

    //check overall length
    expect(result.length).to.be.equal(3);

    //check length of individual sub arrays
    expect(result[0].length).to.be.equal(2);
    expect(result[1].length).to.be.equal(2);
    expect(result[2].length).to.be.equal(2);
  });

  it('will return 2 equal arrays, and one with whats left', () => {
    let result = p.groupArrayElements([1, 2, 3, 4, 5], 3);

    //check overall length
    expect(result.length).to.be.equal(3);

    //check length of individual sub arrays
    expect(result[0].length).to.be.equal(2);
    expect(result[1].length).to.be.equal(2);
    expect(result[2].length).to.be.equal(1);
  });

  it('will handle smaller array than n', () => {
    let result = p.groupArrayElements([1, 2], 3);

    //check overall length
    expect(result.length).to.be.equal(3);

    //check length of individual sub arrays
    expect(result[0].length).to.be.equal(1);
    expect(result[1].length).to.be.equal(1);
    expect(result[2].length).to.be.equal(0);
  });
});
