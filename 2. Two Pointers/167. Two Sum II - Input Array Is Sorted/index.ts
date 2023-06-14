function twoSum(numbers: number[], target: number): number[] {
  let head = 0
  let tail = numbers.length - 1

  while (head < tail) {
    if (numbers[head] + numbers[tail] > target) {
      tail -= 1
    } else if (numbers[head] + numbers[tail] < target) {
      head += 1
    } else {
      return [head + 1, tail + 1]
    }
  }
  return [head + 1, tail + 1]
}
