import { describe, expect, it } from 'vitest';
import { peakIndexInMountainArray } from '../src/0852-peak-index-in-a-mountain-array';

describe('852. Peak Index in a Mountain Array', () => {
  it('arr = [0,1,0]', () => {
    expect(peakIndexInMountainArray([0, 1, 0])).toBe(1);
  });

  it('arr = [0,2,1,0]', () => {
    expect(peakIndexInMountainArray([0, 2, 1, 0])).toBe(1);
  });

  it('arr = [0,10,5,2]', () => {
    expect(peakIndexInMountainArray([0, 10, 5, 2])).toBe(1);
  });
});
