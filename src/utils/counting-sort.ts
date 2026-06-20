export function countingSort(arr: number[], sequence: 'ASC' | 'DESC' = 'ASC'): number[] {
  if (arr.length === 0) {
    return [];
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  const range = max - min + 1;
  const count = Array.from({ length: range }, () => 0);

  for (const num of arr) {
    count[num - min]++;
  }

  const result: number[] = [];
  for (let i = 0; i < range; i++) {
    while (count[i] > 0) {
      result.push(i + min);
      count[i]--;
    }
  }

  return sequence === 'ASC' ? result : result.toReversed();
}
