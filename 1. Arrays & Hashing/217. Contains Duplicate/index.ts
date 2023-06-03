function containsDuplicate(nums: number[]): boolean {
  const occurrences = new Set<number>()
  for (const num of nums) {
    if (occurrences.has(num)) {
      return true
    } else {
      occurrences.add(num)
    }
  }
  return false
}
