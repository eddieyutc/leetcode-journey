import { ListNode } from '../../support-types/ListNode'

function middleNode(head: ListNode | null): ListNode | null {
  let fast = head
  let slow = head
  while (fast !== null && fast.next !== null) {
    fast = fast?.next?.next ?? null
    slow = slow?.next ?? null
  }
  return slow
}
