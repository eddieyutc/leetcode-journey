function longestConsecutive(nums: number[]): number {
  const map = new Map<number, number>()
  let max = 0
  for (const num of nums) {
    if (!map.has(num)) {
      const left = map.get(num - 1) ?? 0
      const right = map.get(num + 1) ?? 0
      const sum = left + right + 1
      map.set(num, sum)
      map.set(num - left, sum)
      map.set(num + right, sum)

      max = Math.max(max, sum)
    }
  }
  return max
}
