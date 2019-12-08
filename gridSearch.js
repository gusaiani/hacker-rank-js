function gridSearch(grid, pattern) {
  for (let i = 0; i < grid.length; i++) {
    let patternFoundPosition = 0

    while (patternFoundPosition > -1) {
      patternFoundPosition = grid[i].indexOf(pattern[0], patternFoundPosition)

      if (patternFoundPosition == -1) continue

      if (canCompletePattern(grid, pattern, i, patternFoundPosition)) {
        return true
      }

      patternFoundPosition++
    }
  }

  return false
}

function canCompletePattern(grid, pattern, i, startColumn) {
  if (grid.length - i - pattern.length < 0) return false

  for (let j = 1; j < pattern.length; j++) {
    if (grid[j + i].indexOf(pattern[j], startColumn) != startColumn) {
      return false
    }
  }

  return true
}

module.exports = gridSearch
