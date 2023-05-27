import { ListNode } from '../../support-types/ListNode'

function isPalindrome(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return true
  }
  const length = listLength(head)
  const middle = middleNode(head)
  let firstHalfHead = head as ListNode | null
  let secondHalfHead = middle
  if (length % 2 === 1) {
    secondHalfHead = secondHalfHead?.next ?? null
  }
  let secondHalfReversedHead = reverseList(secondHalfHead)
  while (secondHalfReversedHead !== null) {
    if (firstHalfHead?.val !== secondHalfReversedHead?.val) {
      return false
    }
    firstHalfHead = firstHalfHead?.next ?? null
    secondHalfReversedHead = secondHalfReversedHead?.next ?? null
  }

  return true
}

function listLength(head: ListNode | null): number {
  let length = 0
  let current = head
  while (current != null) {
    length++
    current = current.next
  }
  return length
}

function middleNode(head: ListNode | null): ListNode | null {
  let fast = head
  let slow = head
  while (fast !== null && fast.next !== null) {
    fast = fast?.next?.next ?? null
    slow = slow?.next ?? null
  }
  return slow
}

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head?.next === null) {
    return head
  }
  let next = head?.next as ListNode | null
  let previous = null
  let currentHead = head
  currentHead.next = previous
  while (next !== null) {
    previous = currentHead
    currentHead = next
    next = next?.next ?? null
    currentHead.next = previous
  }
  return currentHead
}
