export function largestAltitude(gain: number[]): number {
  let max = 0;
  let current = 0;
  for (const g of gain) {
    current += g;
    if (current > max) {
      max = current;
    }
  }
  return max;
}
