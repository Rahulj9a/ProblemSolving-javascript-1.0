//Middle of the Linked List

//Solved

// Link:- https://leetcode.com/problems/middle-of-the-linked-list

/* Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node. */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let h1= head, count=1
    while(h1.next){
        h1=h1.next
        count++
    }
    count=parseInt(count/2)
    while(count){
        head=head.next
        count--
    }
    return head

};
Console


