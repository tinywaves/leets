import { countingSort } from './utils/counting-sort';

export function maxIceCream(costs: number[], coins: number): number {
  const sorted = countingSort(costs);
  let count = 0;
  let total = 0;

  for (const price of sorted) {
    if (total + price <= coins) {
      total += price;
      count++;
    }
  }

  return count;
}
