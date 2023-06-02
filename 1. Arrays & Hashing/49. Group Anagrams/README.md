# 49. Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Example

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]

## Constraints

- 1 <= strs.length <= 10^4
- 0 <= strs[i].length <= 100
- strs[i] consists of lowercase English letters.

## Solution

For each string, create a fingerprint consisting of all its characters and use it as the key for a map of anagrams.

In the map, store the list of anagrams indexed by their key. Anagrams should have the same key (same set of characters).

A simple sort for the strings produce the key.

### Performance

Runtime: 132ms (60.94%)
Memory: 53.2MB (87.36%)
