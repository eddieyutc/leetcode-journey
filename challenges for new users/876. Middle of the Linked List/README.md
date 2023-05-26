# 876. Middle of the Linked List

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

## Example

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

## Constraints

- The number of nodes in the list is in the range [1, 100].
- 1 <= Node.val <= 100

## Solution

To know where the middle node is we need to know the length of the linked list.

We'll run a first pass through the linked list to get the length of the linked list. Get the middle index, then run the second pass to return the node.

### Performance

Runtime: 65ms (37.29%)
Memory: 43.1MB (67.91%)
