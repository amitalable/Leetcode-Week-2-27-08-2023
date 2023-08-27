//https://leetcode.com/problems/remove-duplicates-from-sorted-list/submissions/
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (!head.next) return head;

  let prev = head;
  let curr = head.next;

  while (curr) {
    while (curr && curr.val === prev.val) {
      curr = curr.next as ListNode;
    }

    prev.next = curr;
    prev = curr;

    if (curr) {
      curr = curr.next as ListNode;
    }
  }

  return head;
}
