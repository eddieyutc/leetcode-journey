function fizzBuzz(n: number): string[] {
  const result = Array(n) as string[]
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result[i-1] = 'FizzBuzz'
    } else if (i % 3 === 0) {
      result[i-1] = 'Fizz'
    } else if (i % 5 === 0) {
      result[i-1] = 'Buzz'
    } else {
      result[i-1] = i.toString()
    }
  }
  return result
}
