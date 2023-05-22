const SymbolToInt = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

type RomanSymbol = keyof typeof SymbolToInt

const prefixSymbol = ['I', 'X', 'C']

const subtractableGroup = {
  'I': ['V', 'X'],
  'X': ['L', 'C'],
  'C': ['D', 'M']
} as Record<string, string[]>

function isSubtractable(first: string, second: string): boolean {
  return prefixSymbol.includes(first) && subtractableGroup[first].includes(second)
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
    return sum + SymbolToInt[roman[0]]
  }
  const [first, second] = parse(roman)
  if (isSubtractable(first, second)) {
    const combinedTotal = SymbolToInt[second] - SymbolToInt[first]
    return parseRoman(roman.slice(2), sum + combinedTotal)
  }
  const firstInteger = SymbolToInt[first]
  return parseRoman(roman.slice(1), sum + firstInteger)
}

function romanToInt(roman: string) {
  const symbols = roman.split('') as RomanSymbol[]
  return parseRoman(symbols, 0)
}