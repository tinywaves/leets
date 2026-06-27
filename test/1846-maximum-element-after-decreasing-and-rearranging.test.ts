import { describe, expect, it } from 'vitest';
import { maximumElementAfterDecrementingAndRearranging } from '../src/1846-maximum-element-after-decreasing-and-rearranging';

describe('1846. Maximum Element After Decreasing and Rearranging', () => {
  it('arr = [2,2,1,2,1]', () => {
    expect(maximumElementAfterDecrementingAndRearranging([2, 2, 1, 2, 1])).toBe(2);
  });

  it('arr = [100,1,1000]', () => {
    expect(maximumElementAfterDecrementingAndRearranging([100, 1, 1000])).toBe(3);
  });

  it('arr = [1,2,3,4,5]', () => {
    expect(maximumElementAfterDecrementingAndRearranging([1, 2, 3, 4, 5])).toBe(5);
  });
});
