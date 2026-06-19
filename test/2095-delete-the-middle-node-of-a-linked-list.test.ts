import { describe, it, expect } from 'vitest';
import { deleteMiddle } from '../src/2095-delete-the-middle-node-of-a-linked-list';
import { ListNode } from '../src/utils/list-node';

function buildList(arr: number[]): ListNode | null {
  if (arr.length === 0) {
    return null;
  }

  const head = new ListNode(arr[0]);
  let cur = head;

  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }

  return head;
}

function toArray(head: ListNode | null): number[] {
  let h = head;
  const res: number[] = [];

  while (h) {
    res.push(h.val);
    h = h.next;
  }

  return res;
}

describe('2095. Delete the Middle Node of a Linked List', () => {
  it('head = [1,3,4,7,1,2,6]', () => {
    const head = buildList([1, 3, 4, 7, 1, 2, 6]);
    const res = deleteMiddle(head);
    expect(toArray(res)).toEqual([1, 3, 4, 1, 2, 6]);
  });

  it('head = [1,2,3,4]', () => {
    const head = buildList([1, 2, 3, 4]);
    const res = deleteMiddle(head);
    expect(toArray(res)).toEqual([1, 2, 4]);
  });

  it('head = [2,1]', () => {
    const head = buildList([2, 1]);
    const res = deleteMiddle(head);
    expect(toArray(res)).toEqual([2]);
  });
});
