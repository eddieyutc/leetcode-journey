# Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

## Examples

Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false

## Constraints

- The number of nodes in the list is in the range [1, 10^5].
- 0 <= Node.val <= 9

## Solution

Begin with the trivial O(n) space approach, the easiest way to do it is to reverse the linked list and compare them.

steps:

1. reverse linked list
   1. let reversedHead be the head of original list
   2. new Node(head.next) points to reversedHead
   3. new Node becomes the new reversedHead
2. compare the nodes from both list at the same index

An O(1) space solution will probably require modifying the original input in place, which sounds a bit uncomfortable to me for I have been very accustomed to the idea of functional programming and immutability.

steps:

1. get length of linked list
2. find middle node
3. reverse the second half of the list. If length is odd, skip the first node
4. compare each node from both list

### Performance

Original solution

Runtime: 173ms (46.15%)
Memory: 87MB (12.87%)

O(1)-space solution

Runtime: 135ms (82.40%)
Memory: 73.2MB (55.45%)
