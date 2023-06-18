const operations = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  '*': (a: number, b: number) => a * b,
  '/': (a: number, b: number) => Math.trunc(a / b),
}

function evalRPN(tokens: string[]): number {
  const stack = [] as number[]

  for (const token of tokens) {
    if (token in operations) {
      const second = stack.pop()
      const first = stack.pop()
      const result = operations[token as keyof typeof operations](
        first!,
        second!
      )
      stack.push(result)
    } else {
      stack.push(parseInt(token))
    }
  }
  return stack[0]
}
