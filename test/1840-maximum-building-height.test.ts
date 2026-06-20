import { describe, expect, it } from 'vitest';
import { maxBuilding } from '../src/1840-maximum-building-height';

describe('1840. Maximum Building Height', () => {
  it('n = 5, restrictions = [[2,1],[4,1]]', () => {
    expect(maxBuilding(5, [[2, 1], [4, 1]])).toBe(2);
  });

  it('n = 6, restrictions = []', () => {
    expect(maxBuilding(6, [])).toBe(5);
  });

  it('n = 10, restrictions = [[5,3],[2,5],[7,4],[10,3]]', () => {
    expect(maxBuilding(10, [[5, 3], [2, 5], [7, 4], [10, 3]])).toBe(5);
  });
});
