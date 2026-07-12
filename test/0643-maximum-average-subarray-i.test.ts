import { describe, expect, it } from 'vitest';
import { findMaxAverage } from '../src/0643-maximum-average-subarray-i';

describe('643. Maximum Average Subarray I', () => {
  it('nums = [1,12,-5,-6,50,3], k = 4', () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
  });

  it('nums = [5], k = 1', () => {
    expect(findMaxAverage([5], 1)).toBe(5);
  });
});
