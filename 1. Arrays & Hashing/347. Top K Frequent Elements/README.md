# 347. Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

## Example

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]

## Constraints

- 1 <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4
- k is in the range [1, the number of unique elements in the array].
- It is guaranteed that the answer is unique.

## Follow up

Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

## Solution

Use a map to count the frequencies of elements, sort the map by frequency and return the top k num.

### Performance

Runtime: 83ms (45.43%)
Memory: 49.5MB (66.14%)
