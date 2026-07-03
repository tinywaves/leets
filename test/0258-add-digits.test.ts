import { describe, expect, it } from 'vitest';
import { addDigits } from '../src/0258-add-digits';

describe('258. Add Digits', () => {
  it('num = 38', () => {
    expect(addDigits(38)).toBe(2);
  });

  it('num = 0', () => {
    expect(addDigits(0)).toBe(0);
  });
});
