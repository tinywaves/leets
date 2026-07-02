import { describe, expect, it } from 'vitest';
import { countGoodTriplets } from '../src/1534-count-good-triplets';

describe('1534. Count Good Triplets', () => {
  it('arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3', () => {
    expect(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3)).toBe(4);
  });

  it('arr = [1,1,2,2,3], a = 0, b = 0, c = 1', () => {
    expect(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1)).toBe(0);
  });
});
