import { describe, it, expect } from 'vitest';
import { largestAltitude } from '../src/1732-find-the-highest-altitude';

describe('1732. Find the Highest Altitude', () => {
  it('gain = [-5,1,5,0,-7]', () => expect(largestAltitude([-5, 1, 5, 0, -7])).toBe(1));

  it('gain = [-4,-3,-2,-1,4,3,2]', () => expect(largestAltitude([-4, -3, -2, -1, 4, 3, 2])).toBe(0));
});
