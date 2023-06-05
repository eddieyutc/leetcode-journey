# 238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

## Example

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

## Constraints

- 2 <= nums.length <= 10^5
- -30 <= nums[i] <= 30
- The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

## Follow up

Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

## Solution

Set up 2 arrays. The ith item in the first array contains the product of all the numbers from its current position to the end of the array. The ith item in the second array contains the product of all the numbers from its current position to the first element in reverse.

E.g.

Input: nums = [1,2,3,4]
First array: [24, 24, 12, 4]
Second array: [1, 2, 6, 24]

To get the product of array at position i, we multiply the [i+1]th element of the first array by the [i-1]th element of the second array.

### Performance

Runtime: 91ms (97.87%)
Memory: 53.7MB (81%)
