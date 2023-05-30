function containsDuplicate(nums: number[]): boolean {
  let occurrences = new Set() as Set<number>
  for (const num of nums) {
    if (occurrences.has(num)) {
      return true
    } else {
      occurrences.add(num)
    }
  }
  return false
};