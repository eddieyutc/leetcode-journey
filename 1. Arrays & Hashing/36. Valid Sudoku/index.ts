function isValidSudoku(board: string[][]): boolean {
  const isRowsValid = board.map(removeEmpty).every(isValid)
  const isColumnsValid = getColumns(board).map(removeEmpty).every(isValid)
  const isBoxesValid = getBoxes(board).map(removeEmpty).every(isValid)
  return isRowsValid && isColumnsValid && isBoxesValid
}

function isValid(cells: string[]): boolean {
  const unique = new Set()
  for (const cell of cells) {
    if (unique.has(cell)) {
      return false
    }
    unique.add(cell)
  }
  return true
}

function getColumns(board: string[][]): string[][] {
  const columns = Array.from(Array(9), () => []) as string[][]
  for (const row of board) {
    row.forEach((cell, index) => {
      columns[index].push(cell)
    })
  }
  return columns
}

function getBoxes(board: string[][]): string[][] {
  const boxes = Array.from(Array(9), () => []) as string[][]
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      boxes[boxIndex].push(board[i][j])
    }
  }
  return boxes
}

function removeEmpty(cells: string[]): string[] {
  return cells.filter((cell) => cell !== '.')
}
