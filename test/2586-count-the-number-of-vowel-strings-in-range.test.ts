import { describe, expect, it } from 'vitest';
import { vowelStrings } from '../src/2586-count-the-number-of-vowel-strings-in-range';

describe('2586. Count the Number of Vowel Strings in Range', () => {
  it('words = ["are","amy","u"], left = 0, right = 2', () => {
    expect(vowelStrings(['are', 'amy', 'u'], 0, 2)).toBe(2);
  });

  it('words = ["hey","aeo","mu","ooo","artro"], left = 1, right = 4', () => {
    expect(vowelStrings(['hey', 'aeo', 'mu', 'ooo', 'artro'], 1, 4)).toBe(3);
  });
});
