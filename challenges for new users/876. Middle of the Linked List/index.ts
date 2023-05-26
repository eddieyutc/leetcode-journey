import { ListNode } from "../../support-types/ListNode";

function middleNode(head: ListNode | null): ListNode | null {
  const length = getLength(head)
  const middle = getMiddleIndex(length)
  return getNodeAtIndex(head, middle)
};

function getLength(head: ListNode | null): number {
  let length = 0
  let current = head
  while (current != null) {
    length++
    current = current.next
  }
  return length
}

function getMiddleIndex(length: number): number {
  return Math.floor(length / 2)
}

function getNodeAtIndex(head: ListNode | null, index: number): ListNode | null {
  let currentNode = head
  let currentIndex = 0
  while (currentNode != null && currentIndex < index) {
    currentNode = currentNode.next
    currentIndex++
  }
  return currentNode
}