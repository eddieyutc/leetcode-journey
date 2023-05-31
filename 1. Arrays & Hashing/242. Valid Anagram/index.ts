function isAnagram(s: string, t: string): boolean {
  const sCharactersMap = buildCharactersMap(s)
  for (const character of t) {
    const characterOccurence = sCharactersMap.get(character)
    if (!characterOccurence || characterOccurence === 0) {
      return false
    }
    const newOccurence = characterOccurence - 1
    newOccurence === 0
      ? sCharactersMap.delete(character)
      : sCharactersMap.set(character, characterOccurence - 1)
  }
  return sCharactersMap.size === 0
}

function buildCharactersMap(input: string): Map<string, number> {
  const charactersMap = new Map() as Map<string, number>
  for (const character of input) {
    charactersMap.set(character, (charactersMap.get(character) ?? 0) + 1)
  }
  return charactersMap
}
