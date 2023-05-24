# 383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

## Example

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true


## Constraints

- 1 <= ransomNote.length, magazine.length <= 105
- ransomNote and magazine consist of lowercase English letters.

## Solution

In a simple loop through ransomNote, for each character in ransomNote, search if it exists in magazine. Remove the character from magazine if there is a match, return false if no match.

The runtime complexity is O(mn)

Constructing a map for the character occurrence in both ransomNote and magazine can reduce it to O(n) but inducing a O(n) cost in memory.

### Result

Using the occurrence map solution

Runtime: 75ms (90%)
Memory: 46.8MB (44.84%)