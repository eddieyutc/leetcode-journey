function isPalindrome(s: string): boolean {
  const input = s.replace(/[^0-9A-Za-z]/g, '').toLowerCase()
  let front = 0
  let back = input.length - 1
  while (back - front >= 0) {
    if (input[front] !== input[back]) {
      return false
    }
    front++
    back--
  }
  return true
}
