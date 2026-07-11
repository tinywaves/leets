import { describe, expect, it } from 'vitest';
import { maxVowels } from '../src/1456-maximum-number-of-vowels-in-a-substring-of-given-length';

describe('1456. Maximum Number of Vowels in a Substring of Given Length', () => {
  it('s = "abciiidef", k = 3', () => {
    expect(maxVowels('abciiidef', 3)).toBe(3);
  });

  it('s = "aeiou", k = 2', () => {
    expect(maxVowels('aeiou', 2)).toBe(2);
  });

  it('s = "leetcode", k = 3', () => {
    expect(maxVowels('leetcode', 3)).toBe(2);
  });
});
