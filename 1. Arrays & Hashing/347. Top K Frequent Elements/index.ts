function topKFrequent(nums: number[], k: number): number[] {
  const frequencies = new Map<number, number>()

  for (const num of nums) {
    frequencies.set(num, (frequencies.get(num) ?? 0) + 1)
  }

  const sortedFrequencies = [...frequencies.entries()].sort(
    (a, b) => b[1] - a[1]
  )
  return sortedFrequencies.slice(0, k).map(([num, _]) => num)
}
