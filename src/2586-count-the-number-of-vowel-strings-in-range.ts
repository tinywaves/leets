import { vowels } from './utils/consts';

export function vowelStrings(words: string[], left: number, right: number): number {
  return words
    .slice(left, right + 1)
    .filter((word) => vowels.has(word[0]) && vowels.has(word.at(-1) || ''))
    .length;
}
