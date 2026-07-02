import { describe, expect, it } from 'vitest';
import { numIdenticalPairs } from '../src/1512-number-of-good-pairs';

describe('1512. Number of Good Pairs', () => {
  it('nums = [1,2,3,1,1,3]', () => {
    expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toBe(4);
  });

  it('nums = [1,1,1,1]', () => {
    expect(numIdenticalPairs([1, 1, 1, 1])).toBe(6);
  });

  it('nums = [1,2,3]', () => {
    expect(numIdenticalPairs([1, 2, 3])).toBe(0);
  });
});
