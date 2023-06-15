function trap(height: number[]): number {
  if (height.length < 3) {
    return 0
  }
  const findArea = (left: number, right: number) => {
    const threshold = Math.min(height[left], height[right])
    let area = 0
    for (let i = left + 1; i < right; i++) {
      area += threshold - height[i]
    }
    return area
  }
  let left = 0
  let right = left + 1
  let totalArea = 0
  while (right < height.length - 1) {
    if (height[right] >= height[left]) {
      totalArea += findArea(left, right)
      left = right
      right = left + 1
    } else {
      right = right + 1
    }
  }
  if (height[right] >= height[left]) {
    totalArea += findArea(left, right)
  } else {
    // reverse from end to where left was
    const stop = left
    left = right - 1
    while (right > stop + 1) {
      if (height[left] >= height[right]) {
        totalArea += findArea(left, right)
        right = left
        left = left - 1
      } else {
        left = left - 1
      }
    }
  }
  return totalArea
}

const example = [
  [[], 0],
  [[1], 0],
  [[1, 1], 0],
  [[0, 1], 0],
  [[1, 0], 0],
  [[1, 0, 0], 0],
  [[1, 0, 1], 1],
  [[1, 0, 2], 1],
  [[2, 0, 1], 1],
  [[2, 0, 1, 0, 2], 5],
  [[2, 0, 1, 0, 1], 2],
  [[2, 0, 1, 0, 0], 1],
  [[3, 0, 1, 0, 4, 3, 1, 2, 0, 3], 14],
  [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
  [[4, 2, 0, 3, 2, 5], 9],
  [[2, 0, 3, 0, 5, 0, 2], 7],
] as [number[], number][]

example.forEach((e, i) => {
  console.log(`${i}: ${trap(e[0])}, ${e[1]}`)
})
