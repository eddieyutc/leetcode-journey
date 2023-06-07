# 128. Longest Consecutive Sequence

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

## Example

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

## Constraints

Constraints:

- 0 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9

## Solution

create a Map<number, number> to store the length of the sequence where the key is located at.

for num in nums

if num in map, skip
get length from num+1 and num-1
set length at map[num] = map[num-1] + map[num+1] + 1
if num-1 or num+1 has length>0, update the length at the end of the sequence

### Performance

Runtime: 131ms (64.73%)
Memory: 67.7MB (18.99%)
