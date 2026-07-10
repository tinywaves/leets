import { describe, expect, it } from 'vitest';
import { maxScore } from '../src/1422-maximum-score-after-splitting-a-string';

describe('1422. Maximum Score After Splitting a String', () => {
  it('s = "011101"', () => {
    expect(maxScore('011101')).toBe(5);
  });

  it('s = "00111"', () => {
    expect(maxScore('00111')).toBe(5);
  });

  it('s = "1111"', () => {
    expect(maxScore('1111')).toBe(3);
  });
});
