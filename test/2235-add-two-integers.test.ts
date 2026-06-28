import { describe, expect, it } from 'vitest';
import { sum } from '../src/2235-add-two-integers';

describe('2235. Add Two Integers', () => {
  it('num1 = 12, num2 = 5', () => {
    expect(sum(12, 5)).toBe(17);
  });

  it('num1 = -10, num2 = 4', () => {
    expect(sum(-10, 4)).toBe(-6);
  });
});
