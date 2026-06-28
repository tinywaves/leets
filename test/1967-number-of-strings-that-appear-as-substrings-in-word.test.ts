import { describe, expect, it } from 'vitest';
import { numOfStrings } from '../src/1967-number-of-strings-that-appear-as-substrings-in-word';

describe('1967. Number of Strings That Appear as Substrings in Word', () => {
  it('patterns = ["a","abc","bc","d"], word = "abc"', () => {
    expect(numOfStrings(['a', 'abc', 'bc', 'd'], 'abc')).toBe(3);
  });

  it('patterns = ["a","b","c"], word = "aaaaabbbbb"', () => {
    expect(numOfStrings(['a', 'b', 'c'], 'aaaaabbbbb')).toBe(2);
  });

  it('patterns = ["a","a","a"], word = "ab"', () => {
    expect(numOfStrings(['a', 'a', 'a'], 'ab')).toBe(3);
  });
});
