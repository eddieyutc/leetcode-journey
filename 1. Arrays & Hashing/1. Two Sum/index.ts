function twoSum(nums: number[], target: number): number[] {
  const indexMap = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const reciprocal = target - nums[i]

    if (indexMap.has(reciprocal)) {
      return [indexMap.get(reciprocal)!, i]
    }

    indexMap.set(nums[i], i)
  }

  return [-1, -1]
}
