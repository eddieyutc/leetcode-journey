# Roman to Integer

The task is to convert a string of Roman numeral to an integer.

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

- I can be placed before V (5) and X (10) to make 4 and 9.
- X can be placed before L (50) and C (100) to make 40 and 90.
- C can be placed before D (500) and M (1000) to make 400 and 900.

## Examples

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

## Constraints

- 1 <= s.length <= 15
- s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
- It is guaranteed that s is a valid roman numeral in the range [1, 3999].

## Solution

The original solution I came up with is decent with runtime performance but uses quite a lot of memory. First improvement is to use Map instead of plain JavaScript objects.

After several iterations I've noticed some inconsistency in the number. The performance fluctuation in the runtime environment they host is more of a contributing factor to the difference in the performance figure than the algorithm itself. A resubmissions of the same code with different performance result proves this point.

There probably won't be any meaningful difference in the performance figures unless there is a significant Big-O complexity difference in the algorithm. There is no point in trying to tweak the performance by minor changes in the algorithm cause it'll be negligible.

### Performance

original version:

Runtime: 119ms (93.27%)
Memory: 49.9MB (22.64%)

1st iteration (replace object with map)

Runtime: 142ms (37.8%)
Memory: 48.6MB (60.15%)

2nd iteration (remove prefix symbol check in isSubtractable())

Runtime: 129ms (75.72%)
Memory: 48.9MB (50.15%)

3rd iteration (remove parse() and the new object it instantiates)

Runtime: 136ms (55.4%)
Memory: 48.9MB (47.12%)

4th iteration (iterative version instead of recursive)

Runtime: 141ms (39.41%)
Memory: 49MB (47.12%)
