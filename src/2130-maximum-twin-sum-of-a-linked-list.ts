import type { ListNode } from './utils/list-node';

export function pairSum(head: ListNode | null): number {
  let index = head;
  const values: number[] = [];
  while (index) {
    values.push(index.val);
    index = index.next;
  }

  let max = 0;
  for (let i = 0; i <= values.length / 2 - 1; i++) {
    const twinSum = values[i] + values[values.length - 1 - i];
    if (twinSum > max) {
      max = twinSum;
    }
  }

  return max;
}
