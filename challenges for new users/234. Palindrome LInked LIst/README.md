# Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

## Examples

Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false

## Constraints

- The number of nodes in the list is in the range [1, 105].
- 0 <= Node.val <= 9

## Solution

Begin with the trivial O(n) space approach, the easiest way to do it is to reverse the linked list and compare them.

steps:

1. reverse linked list
   1. let reversedHead be the head of original list
   2. new Node(head.next) points to reversedHead
   3. new Node becomes the new reversedHead
2. compare the nodes from both list at the same index

### Result

Runtime: 173ms (46.15%)
Memory: 87MB (12.87%)
