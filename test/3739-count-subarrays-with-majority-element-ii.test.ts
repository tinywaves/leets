import { describe, expect, it } from 'vitest';
import { countMajoritySubarrays } from '../src/3739-count-subarrays-with-majority-element-ii';

describe('3739. Count Subarrays With Majority Element II', () => {
  it('nums = [1,2,2,3], target = 2', () => {
    expect(countMajoritySubarrays([1, 2, 2, 3], 2)).toBe(5);
  });

  it('nums = [1,1,1,1], target = 1', () => {
    expect(countMajoritySubarrays([1, 1, 1, 1], 1)).toBe(10);
  });

  it('nums = [1,2,3], target = 4', () => {
    expect(countMajoritySubarrays([1, 2, 3], 4)).toBe(0);
  });
});
