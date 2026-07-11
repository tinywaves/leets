import { vowels } from './utils/consts';

export function maxVowels(s: string, k: number): number {
  let count = s.slice(0, k).split('').filter((char) => vowels.has(char)).length;
  let max = count;
  let left = 1;
  let right = left + k - 1;
  while (right <= s.length - 1) {
    if (vowels.has(s[left - 1])) {
      count--;
    }
    if (vowels.has(s[right])) {
      count++;
    }
    left++;
    right++;
    max = Math.max(max, count);
  }
  return max;
}
