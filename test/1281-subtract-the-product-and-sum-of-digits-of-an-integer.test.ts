import { describe, expect, it } from 'vitest';
import { subtractProductAndSum } from '../src/1281-subtract-the-product-and-sum-of-digits-of-an-integer';

describe('1281. Subtract the Product and Sum of Digits of an Integer', () => {
  it('n = 234', () => {
    expect(subtractProductAndSum(234)).toBe(15);
  });

  it('n = 4421', () => {
    expect(subtractProductAndSum(4421)).toBe(21);
  });
});
