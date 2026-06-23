import { describe, expect, it } from 'vitest';
import { zigZagArrays } from '../src/3700-number-of-zigzag-arrays-ii';

describe('3700. Number of ZigZag Arrays II', () => {
  it('n = 3, l = 4, r = 5', () => {
    expect(zigZagArrays(3, 4, 5)).toBe(2);
  });

  it('n = 3, l = 1, r = 3', () => {
    expect(zigZagArrays(3, 1, 3)).toBe(10);
  });
});
