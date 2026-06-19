import { describe, it, expect } from 'vitest';
import { pairSum } from '../src/2130-maximum-twin-sum-of-a-linked-list';
import { ListNode } from '../src/utils/list-node';

function createLinkedList(arr: number[]): ListNode | null {
  const dummy = new ListNode();
  let current = dummy;

  for (const num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }

  return dummy.next;
}

describe('2130. Maximum Twin Sum of a Linked List', () => {
  it('head = [5,4,2,1]', () => {
    const head = createLinkedList([5, 4, 2, 1]);
    expect(pairSum(head)).toBe(6);
  });

  it('head = [4,2,2,3]', () => {
    const head = createLinkedList([4, 2, 2, 3]);
    expect(pairSum(head)).toBe(7);
  });

  it('head = [1,100000]', () => {
    const head = createLinkedList([1, 100_000]);
    expect(pairSum(head)).toBe(100_001);
  });
});
