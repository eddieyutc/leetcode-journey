const SymbolToInt = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
]) as Map<RomanSymbol, number>

type RomanSymbol = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M'

const subtractableGroup = new Map([
  ['I', ['V', 'X']],
  ['X', ['L', 'C']],
  ['C', ['D', 'M']],
]) as Map<RomanSymbol, RomanSymbol[]>

function isSubtractable(first: RomanSymbol, second: RomanSymbol): boolean {
  return subtractableGroup.get(first)?.includes(second) ?? false
}

function romanToInt(roman: string) {
  let sum = 0
  let previous = '' as RomanSymbol
  for (let i = roman.length - 1; i >= 0; i--) {
    if (isSubtractable(roman[i] as RomanSymbol, previous)) {
      sum -= SymbolToInt.get(roman[i] as RomanSymbol)!
    } else {
      sum += SymbolToInt.get(roman[i] as RomanSymbol)!
    }
    previous = roman[i] as RomanSymbol
  }
  return sum
}

export {}
