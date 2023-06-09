function twoSum(numbers: number[], target: number): number[] {
  let head = 0
  let tail = numbers.length - 1
  let nextMove = numbers[head] + numbers[tail] < target ? 'head' : 'tail'

  while (head <= tail) {
    if (numbers[head] + numbers[tail] === target) {
      return [head + 1, tail + 1]
    }

    if (nextMove === 'head') {
      if (numbers[head] + numbers[tail] > target) {
        while (numbers[head] + numbers[tail] > target) {
          head -= 1
        }
      } else {
        while (numbers[head] + numbers[tail] < target) {
          head += 1
        }
      }
      nextMove = 'tail'
    } else {
      if (numbers[head] + numbers[tail] > target) {
        while (numbers[head] + numbers[tail] > target) {
          tail -= 1
        }
      } else {
        while (numbers[head] + numbers[tail] < target) {
          tail += 1
        }
      }
      nextMove = 'head'
    }
  }
  return [head + 1, tail + 1]
}
