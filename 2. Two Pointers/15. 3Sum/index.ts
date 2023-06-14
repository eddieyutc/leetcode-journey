function threeSum(nums: number[]): number[][] {
  const result = [] as number[][]
  const sorted = nums.sort((a, b) => a - b)
  for (let i = 0; i < sorted.length - 2; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) {
      continue
    }
    const target = 0 - sorted[i]
    const twoSums = findAllTwoSums(sorted.slice(i + 1), target)
    const newTriplets = twoSums.map(([first, second]) => [
      sorted[i],
      first,
      second,
    ])
    result.push(...newTriplets)
  }
  return result
}

function findAllTwoSums(numbers: number[], target: number): [number, number][] {
  const result = [] as [number, number][]
  let head = 0
  let tail = numbers.length - 1

  while (head < tail) {
    if (numbers[head] + numbers[tail] > target) {
      tail -= 1
    } else if (numbers[head] + numbers[tail] < target) {
      head += 1
    } else {
      result.push([numbers[head], numbers[tail]])
      head += 1
      while (head < tail && numbers[head] === numbers[head - 1]) {
        head += 1
      }
    }
  }
  return result
}
