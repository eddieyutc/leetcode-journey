function groupAnagrams(strs: string[]): string[][] {
  const anagramsMap = new Map<string, string[]>()

  for (const str of strs) {
    const key = createKey(str)
    const anagrams = anagramsMap.get(key)
    if (anagrams !== undefined) {
      anagrams.push(str)
    } else {
      anagramsMap.set(key, [str])
    }
  }

  return Array.from(anagramsMap.values())
}

function createKey(str: string): string {
  return str.split('').sort().join('')
}
