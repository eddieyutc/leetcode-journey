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

function parse(roman: RomanSymbol[]): [RomanSymbol, RomanSymbol] {
  const first = roman[0]
  const second = roman[1]
  return [first, second]
}

function parseRoman(roman: RomanSymbol[], sum: number): number {
  if (roman.length === 0) {
    return sum
  }
  if (roman.length === 1) {
    return sum + SymbolToInt.get(roman[0])!
  }
  const [first, second] = parse(roman)
  if (isSubtractable(first, second)) {
    const combinedTotal = SymbolToInt.get(second)! - SymbolToInt.get(first)!
    return parseRoman(roman.slice(2), sum + combinedTotal)
  }
  const firstInteger = SymbolToInt.get(first)!
  return parseRoman(roman.slice(1), sum + firstInteger)
}

function romanToInt(roman: string) {
  const symbols = roman.split('') as RomanSymbol[]
  return parseRoman(symbols, 0)
}

export {}
