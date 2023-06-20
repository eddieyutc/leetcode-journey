# 22. Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

## Example

Example 1:

```
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
```

Example 2:

```
Input: n = 1
Output: ["()"]
```

## Constraints

- 1 <= n <= 8

## Solution

Represent open and close bracket as A and B

```
valid: AB, AABB, ABAB, AAABBB, AABABB, AABBAB, ABAABB, ABABAB
invalid: BA, ABBA, AABBBA, ABBAAB, ABBBBAA
```

Start with an empty array, build up to a combination of parentheses by adding A or B.

Conditions

- number of A has to be >= number of B at any point
- stops at n \* 2
- total number of A has to be = to total number of B at the end

while not end

if (numA === numB === n)
add current combination to result

if (open < n)
push A to current combination

if (close < open)
push B

### Performance

Runtime: 55ms (95.3%)
Memory: 44.9MB (63.25%)
