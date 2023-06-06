# 659. Encode and Decode Strings (LintCode)

Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Please implement `encode` and `decode`

## Example

Example1

```
Input: ["lint","code","love","you"]
Output: ["lint","code","love","you"]
Explanation:
One possible encode method is: "lint:;code:;love:;you"
```

Example2

```
Input: ["we", "say", ":", "yes"]
Output: ["we", "say", ":", "yes"]
Explanation:
One possible encode method is: "we:;say:;:::;yes"
```

## Constraints

## Solution

delimit with ':'
escape ':' and '\' with '\'

input: [1, 2, 3]
output: "1:2:3"

input: [1, :, 3]
output: "1:\::3"

input: [1, \, 3]
output: "1:\\:3"

input: [1, \\, \:, :]
output: "1:\\\\:\\\::\:"

[encode]

For each word, replace
':' with '\:'
'\' with '\\'

[decode]

let currentWord
parse char, while !== '\' or ':', append and parse next char
if parsed === ':', flush currentWord
if parsed === '\', parse next char
if nextParsed === ':', append ':'
if nextParsed === '\', append '\'

### Performance
