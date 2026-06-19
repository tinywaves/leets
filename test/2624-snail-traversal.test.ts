import { describe, it, expect } from 'vitest';
import { snailTool } from '../src/2624-snail-traversal';

describe('2624. Snail Traversal', () => {
  it('nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15] rowsCount5 * colsCount4', () => {
    const nums = [
      19,
      10,
      3,
      7,
      9,
      8,
      5,
      2,
      1,
      17,
      16,
      14,
      12,
      18,
      6,
      13,
      11,
      20,
      4,
      15,
    ];
    expect(snailTool(nums, 5, 4)).toEqual([
      [19, 17, 16, 15],
      [10, 1, 14, 4],
      [3, 2, 12, 20],
      [7, 5, 18, 11],
      [9, 8, 6, 13],
    ]);
  });

  it('nums = [1,2,3,4] rowsCount1 * colsCount4', () => {
    expect(snailTool([1, 2, 3, 4], 1, 4)).toEqual([[1, 2, 3, 4]]);
  });

  it('nums = [1,3] rowsCount2 * colsCount2', () => {
    expect(snailTool([1, 3], 2, 2)).toEqual([]);
  });
});
