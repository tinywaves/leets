import { describe, expect, it } from 'vitest';
import { xorOperation } from '../src/1486-xor-operation-in-an-array';

describe('1486. XOR Operation in an Array', () => {
  it('n = 5, start = 0', () => {
    expect(xorOperation(5, 0)).toBe(8);
  });

  it('n = 4, start = 3', () => {
    expect(xorOperation(4, 3)).toBe(8);
  });
});
