function generateParenthesis(n: number): string[] {
  const result = [] as string[]
  function buildCombination(open: number, close: number, combination: string) {
    if (open === n && open === close) {
      result.push(combination)
      return
    }
    if (open < n) {
      buildCombination(open + 1, close, `${combination}(`)
    }
    if (close < open) {
      buildCombination(open, close + 1, `${combination})`)
    }
  }
  buildCombination(0, 0, '')
  return result
}
