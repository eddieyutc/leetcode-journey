class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function isPalindrome(head: ListNode | null): boolean {
  const reversed = reverseLinkedList(head)
  let originalHead = head
  let reversedHead = reversed
  while (originalHead !== null || reversedHead !== null) {
    if (!isEqual(originalHead, reversedHead)) {
      return false
    }
    originalHead = originalHead?.next ?? null
    reversedHead = reversedHead?.next ?? null
  }
  return true
}

function reverseLinkedList(head: ListNode | null): ListNode | null {
  let reversedHead = new ListNode(head?.val, null)
  let originalHead = head
  while(originalHead?.next !== null) {
    reversedHead = new ListNode(originalHead?.next.val, reversedHead)
    originalHead = originalHead?.next ?? null
  }
  return reversedHead
}

function isEqual(node1: ListNode | null, node2: ListNode | null): boolean {
  return node1?.val === node2?.val
}

const TestHelper = {
  arrayToLinkedList: (arr: number[]) => {
    let head = null
    for (const num of arr.reverse()) {
      head = new ListNode(num, head)
    }
    return head
  }
}

const input1 = TestHelper.arrayToLinkedList([1,2,2,1])
const input2 = TestHelper.arrayToLinkedList([1,2])
console.log(isPalindrome(input1))
console.log(isPalindrome(input2))