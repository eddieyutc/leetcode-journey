function canConstruct(ransomNote: string, magazine: string): boolean {
  const ransomNoteCharacterOccurrences = getCharacterOccurrences(ransomNote)
  const magazineCharacterOccurrences = getCharacterOccurrences(magazine)
  for (const [char,  occur] of ransomNoteCharacterOccurrences.entries()) {
    const magOccur = magazineCharacterOccurrences.get(char)
    if (magOccur === undefined || magOccur < occur) {
      return false
    }
  }
  return true
};

type CharacterOccurrences = Map<string, number>

function getCharacterOccurrences(magazine: string): CharacterOccurrences {
  return magazine.split('').reduce((map: CharacterOccurrences, char: string) => {
    const occurrence = map.get(char)
    if (occurrence !== undefined) {
      map.set(char, occurrence+1)
    }else {
      map.set(char, 1)
    }
    return map
  }
  , new Map())
}