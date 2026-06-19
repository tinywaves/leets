import type { ListNode } from './utils/list-node';

export function deleteMiddle(head: ListNode | null): ListNode | null {
  let length = 0;
  let index = head;
  while (index) {
    length++;
    index = index.next;
  }

  if (head) {
    if (length === 1) {
      return null;
    }

    const middleIndex = Math.floor(length / 2);
    if (middleIndex === 0) {
      return head.next || null;
    } else {
      let current = head;
      let nextIndex = 1;
      while (current.next) {
        const next = current.next;
        if (middleIndex === nextIndex) {
          current.next = next.next;
          return head;
        } else {
          current = next;
        }
        nextIndex++;
      }
      return head;
    }
  } else {
    return null;
  }
}
