# 42. Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

## Example

Example 1:

```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
```

Example 2:

```
Input: height = [4,2,0,3,2,5]
Output: 9
```

## Constraints

- n == height.length
- 1 <= n <= 2 \* 10^4
- 0 <= height[i] <= 10^5

## Solution

In order to trap rain water there has to be 2 bar at least 1 block apart, where every bar within is shorter in height than the two bar.

We can iterate through the array, then

1. find the two bar which satisfy the above condition
2. find the area of water created by the two bar
3. repeat

- left pointer starts from the first bar with height > 0
- if left pointer + 1 has higher height, left pointer = left pointer + 1
- else, right pointer starts at left pointer + 1, iterate until
  - right pointer's height >= left pointer
    - find area between left and right
    - left starts at right's location, repeat procedure
  - right pointer reaches end of array
    - find area between left and right (in reverse from right to left)

```
const example = [
  [[1,0,0], 0],
  [[1,0,1], 1],
  [[1,0,2], 1],
  [[2,0,1], 1],
  [[2,0,1,0,2], 5],
  [[2,0,1,0,1], 2],
  [[2,0,1,0,0], 1],
  [[3,0,1,0,4,3,1,2,0,3], 14],
  [[0,1,0,2,1,0,1,3,2,1,2,1], 6],
  [[4,2,0,3,2,5], 9],
  [[2,0,3,0,5,0,2], 7]
]
```

### Performance

RunTime: 66ms (85.59%)
Memory: 45.5MB (72.6%)
