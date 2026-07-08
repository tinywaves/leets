import { describe, expect, it } from 'vitest';
import { isPowerOfTwo, isPowerOfTwoBitwise } from '../src/0231-power-of-two';

describe('231. Power of Two', () => {
  it('isPowerOfTwo: n = 1', () => {
    expect(isPowerOfTwo(1)).toBe(true);
  });

  it('isPowerOfTwo: n = 16', () => {
    expect(isPowerOfTwo(16)).toBe(true);
  });

  it('isPowerOfTwo: n = 3', () => {
    expect(isPowerOfTwo(3)).toBe(false);
  });

  it('isPowerOfTwoBitwise: n = 1', () => {
    expect(isPowerOfTwoBitwise(1)).toBe(true);
  });

  it('isPowerOfTwoBitwise: n = 16', () => {
    expect(isPowerOfTwoBitwise(16)).toBe(true);
  });

  it('isPowerOfTwoBitwise: n = 3', () => {
    expect(isPowerOfTwoBitwise(3)).toBe(false);
  });
});
