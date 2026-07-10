import { describe, expect, it } from 'vitest';
import { shuffle } from '../src/1470-shuffle-the-array';

describe('1470. Shuffle the Array', () => {
  it('nums = [2,5,1,3,4,7], n = 3', () => {
    expect(shuffle([2, 5, 1, 3, 4, 7], 3)).toEqual([2, 3, 5, 4, 1, 7]);
  });

  it('nums = [1,2,3,4,4,3,2,1], n = 4', () => {
    expect(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)).toEqual([1, 4, 2, 3, 3, 2, 4, 1]);
  });

  it('nums = [1,1,2,2], n = 2', () => {
    expect(shuffle([1, 1, 2, 2], 2)).toEqual([1, 2, 1, 2]);
  });
});
