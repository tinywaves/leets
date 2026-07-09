import { describe, expect, it } from 'vitest';
import { isPowerOfThree } from '../src/0326-power-of-three';

describe('326. Power of Three', () => {
  it('n = 27', () => {
    expect(isPowerOfThree(27)).toBe(true);
  });

  it('n = 0', () => {
    expect(isPowerOfThree(0)).toBe(false);
  });

  it('n = -1', () => {
    expect(isPowerOfThree(-1)).toBe(false);
  });
});
