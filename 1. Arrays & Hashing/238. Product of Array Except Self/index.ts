function productExceptSelf(nums: number[]): number[] {
  const cumulativeProducts = getCumulativeProducts(nums)
  const cumulativeProductsReversed = getCumulativeProductsReversed(nums)
  return nums.map((num, index) => {
    if (index === 0) {
      return cumulativeProducts[index + 1]
    } else if (index === nums.length - 1) {
      return cumulativeProductsReversed[index - 1]
    }
    return cumulativeProducts[index + 1] * cumulativeProductsReversed[index - 1]
  })
}

function getCumulativeProducts(nums: number[]): number[] {
  const result = Array(nums.length) as number[]
  let cumulativeProduct = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    const product = nums[i] * cumulativeProduct
    result[i] = product
    cumulativeProduct = product
  }
  return result
}

function getCumulativeProductsReversed(nums: number[]): number[] {
  const result = []
  let cumulativeProduct = 1
  for (let i = 0; i < nums.length; i++) {
    const product = nums[i] * cumulativeProduct
    result.push(product)
    cumulativeProduct = product
  }
  return result
}
