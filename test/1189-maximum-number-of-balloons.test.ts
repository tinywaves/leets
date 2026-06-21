import { describe, expect, it } from 'vitest';
import { maxNumberOfBalloons } from '../src/1189-maximum-number-of-balloons';

describe('1189. Maximum Number of Balloons', () => {
  it('text = "nlaebolko"', () => {
    expect(maxNumberOfBalloons('nlaebolko')).toBe(1);
  });

  it('text = "loonbalxballpoon"', () => {
    expect(maxNumberOfBalloons('loonbalxballpoon')).toBe(2);
  });

  it('text = "leetcode"', () => {
    expect(maxNumberOfBalloons('leetcode')).toBe(0);
  });
});
