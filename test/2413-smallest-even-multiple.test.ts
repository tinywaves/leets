import { describe, expect, it } from 'vitest';
import { smallestEvenMultiple } from '../src/2413-smallest-even-multiple';

describe('2413. Smallest Even Multiple', () => {
  it('n = 5', () => {
    expect(smallestEvenMultiple(5)).toBe(10);
  });

  it('n = 6', () => {
    expect(smallestEvenMultiple(6)).toBe(6);
  });
});
