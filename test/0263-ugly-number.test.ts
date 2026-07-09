import { describe, expect, it } from 'vitest';
import { isUgly } from '../src/0263-ugly-number';

describe('263. Ugly Number', () => {
  it('n = 6', () => {
    expect(isUgly(6)).toBe(true);
  });

  it('n = 1', () => {
    expect(isUgly(1)).toBe(true);
  });

  it('n = 14', () => {
    expect(isUgly(14)).toBe(false);
  });

  it('n = 0', () => {
    expect(isUgly(0)).toBe(false);
  });
});
