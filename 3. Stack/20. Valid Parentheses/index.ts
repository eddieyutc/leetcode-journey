const openCloseMap = {
  '(': ')',
  '[': ']',
  '{': '}',
}

function isValid(s: string): boolean {
  if (s.length % 2 !== 0) {
    return false
  }
  const stack = []
  for (const char of s) {
    if ('([{'.includes(char)) {
      stack.push(char)
    } else {
      const open = stack.pop() as keyof typeof openCloseMap
      if (char !== openCloseMap[open]) {
        return false
      }
    }
  }
  if (stack.length > 0) {
    return false
  }
  return true
}

const examples = ['(', '((', '()', '()[]{}', '(]', '[()]{}']

examples.forEach((e) => console.log(isValid(e)))
