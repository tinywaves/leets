export function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
  let cur = 0;
  let prev = 0;
  for (const [index, item] of arr.toSorted((a, b) => a - b).entries()) {
    if (index === 0) {
      cur = 1;
    } else {
      cur = item - cur <= 1 ? item : prev + 1;
    }
    prev = cur;
  }
  return cur;
}
