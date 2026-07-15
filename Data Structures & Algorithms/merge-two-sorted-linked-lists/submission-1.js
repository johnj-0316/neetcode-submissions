/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let curr1 = list1;
        let curr2 = list2;

        if (!curr1)
            return curr2;

        if (!curr2)
            return curr1;

        let head;
        let h;

        while (curr1 && curr2) {
            if (curr1.val <= curr2.val) {
                if (!head) {
                    head = curr1
                    h = head;
                }
                else {
                    h.next = curr1;
                    h = h.next;
                }

                curr1 = curr1.next;
            }
            else {
                if (!head) {
                    head = curr2
                    h = head;
                }
                else {
                    h.next = curr2;
                    h = h.next;
                }

                curr2 = curr2.next;
            }
        }

        if (!curr1) {
            h.next = curr2
            return head;
        }
        else if (!curr2) {
            h.next = curr1;
            return head;
        }
    }
}
