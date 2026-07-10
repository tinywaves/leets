import { describe, expect, it } from 'vitest';
import { transpose } from '../src/0867-transpose-matrix';

describe('867. Transpose Matrix', () => {
  it('matrix = [[1,2,3],[4,5,6],[7,8,9]]', () => {
    expect(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
  });

  it('matrix = [[1,2,3],[4,5,6]]', () => {
    expect(transpose([[1, 2, 3], [4, 5, 6]])).toEqual([[1, 4], [2, 5], [3, 6]]);
  });
});
