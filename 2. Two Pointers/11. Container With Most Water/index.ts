function maxArea(height: number[]): number {
  let left = 0
  let right = height.length - 1
  let max = Math.min(height[left], height[right]) * (right - left)
  while (left < right - 1) {
    if (height[left] < height[right]) {
      left += 1
    } else if (height[left] > height[right]) {
      right -= 1
    } else {
      let nextLeft = left + 1
      let nextRight = right - 1
      while (nextLeft < nextRight) {
        if (height[nextLeft] > height[left]) {
          break
        }
        nextLeft++
      }
      while (nextRight > nextLeft) {
        if (height[nextRight] > height[right]) {
          break
        }
        nextRight--
      }
      left = nextLeft
      right = nextRight
    }
    const newArea = Math.min(height[left], height[right]) * (right - left)
    max = Math.max(max, newArea)
  }
  return max
}
