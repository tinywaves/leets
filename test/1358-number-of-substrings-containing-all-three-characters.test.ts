import { describe, expect, it } from 'vitest';
import { numberOfSubstrings, numberOfSubstringsPass } from '../src/1358-number-of-substrings-containing-all-three-characters';

describe('1358. Number of Substrings Containing All Three Characters', () => {
  it('numberOfSubstrings: s = "abcabc"', () => {
    expect(numberOfSubstrings('abcabc')).toBe(10);
  });

  it('numberOfSubstrings: s = "aaacb"', () => {
    expect(numberOfSubstrings('aaacb')).toBe(3);
  });

  it('numberOfSubstrings: s = "abc"', () => {
    expect(numberOfSubstrings('abc')).toBe(1);
  });

  it('numberOfSubstringsPass: s = "abcabc"', () => {
    expect(numberOfSubstringsPass('abcabc')).toBe(10);
  });

  it('numberOfSubstringsPass: s = "aaacb"', () => {
    expect(numberOfSubstringsPass('aaacb')).toBe(3);
  });

  it('numberOfSubstringsPass: s = "abc"', () => {
    expect(numberOfSubstringsPass('abc')).toBe(1);
  });
});
