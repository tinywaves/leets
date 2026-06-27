import { describe, expect, it } from 'vitest';
import { maximumLength } from '../src/3020-find-the-maximum-number-of-elements-in-subset';

describe('3020. Find the Maximum Number of Elements in Subset', () => {
  it('nums = [5,4,1,2,2]', () => {
    expect(maximumLength([5, 4, 1, 2, 2])).toBe(3);
  });

  it('nums = [1,3,2,4]', () => {
    expect(maximumLength([1, 3, 2, 4])).toBe(1);
  });

  it('nums = [18,18,324,324,104976,104976]', () => {
    expect(maximumLength([18, 18, 324, 324, 104_976, 104_976])).toBe(5);
  });
});
