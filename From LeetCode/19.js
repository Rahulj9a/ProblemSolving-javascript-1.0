//Remove Nth Node From End of List

//Solved

//Link:- https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

/* Given the head of a linked list, remove the nth node from the end of the list and return its head. */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
     let h2 = [],
          count = 1,
          n2;

     while (head.next) {
          h2.push(head);
          head = head.next;
          count++;
     }
     h2.push(head);
     if (count == 1 && n == 1) {
          return null;
     }
     n2 = count - n;
     if (n2 == 0) {
          return h2[1];
     } else if (n == 1) {
          h2[n2 - 1].next = null;
     } else {
          console.log(h2[n2 + 1]);
          h2[n2 - 1].next = h2[n2 + 1];
          console.log(h2[n2 - 1].next);
     }

     return h2[0];
};
 