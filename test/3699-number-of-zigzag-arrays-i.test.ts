import { describe, expect, it } from 'vitest';
import { zigZagArrays } from '../src/3699-number-of-zigzag-arrays-i';

describe('3699. Number of ZigZag Arrays I', () => {
  it('n = 3, l = 4, r = 5', () => {
    expect(zigZagArrays(3, 4, 5)).toBe(2);
  });

  it('n = 3, l = 1, r = 3', () => {
    expect(zigZagArrays(3, 1, 3)).toBe(10);
  });
});
