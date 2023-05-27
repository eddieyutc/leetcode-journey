type RowStrength = [number, number]

function kWeakestRows(mat: number[][], k: number): number[] {
  const strengths = [] as RowStrength[]
  for (let i = 0; i < mat.length; i++) {
    const row = mat[i]
    const strength = getStrength(row)
    const rowStrength = [strength, i] as RowStrength
    insertStrength(strengths, rowStrength, k)
  }
  return strengths.map((rowStrength) => rowStrength[1])
}

function getStrength(row: number[]): number {
  let strength = 0
  for (let i = 0; i < row.length; i++) {
    if (row[i] !== 1) {
      return strength
    }
    strength++
  }
  return strength
}

function insertStrength(
  strengths: RowStrength[],
  rowStrength: RowStrength,
  k: number
) {
  let inserted = false
  for (let i = 0; i < strengths.length; i++) {
    if (strengths[i][0] > rowStrength[0]) {
      strengths.splice(i, 0, rowStrength)
      inserted = true
      break
    }
  }
  if (strengths.length > k) {
    strengths.pop()
  } else if (strengths.length < k && !inserted) {
    strengths.push(rowStrength)
  }
}
