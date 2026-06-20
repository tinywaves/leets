import { describe, expect, it } from 'vitest';
import { maxIceCream } from '../src/1833-maximum-ice-cream-bars';

describe('1833. Maximum Ice Cream Bars', () => {
  it('costs = [1,3,2,4,1], coins = 7', () => {
    expect(maxIceCream([1, 3, 2, 4, 1], 7)).toBe(4);
  });

  it('costs = [10,6,8,7,7,8], coins = 5', () => {
    expect(maxIceCream([10, 6, 8, 7, 7, 8], 5)).toBe(0);
  });

  it('costs = [1,6,3,1,2,5], coins = 20', () => {
    expect(maxIceCream([1, 6, 3, 1, 2, 5], 20)).toBe(6);
  });
});
