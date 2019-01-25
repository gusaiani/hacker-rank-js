// https://www.hackerrank.com/challenges/3d-surface-area/problem
function surface(rows) {
  let result = 0

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].length; j++) {
      const height = rows[i][j]

      // If this cell's height is > 0,
      // add 2 to surface (top and bottom)
      if (height > 0) { result += 2 }

      // If this is first or last row,
      // add height to surface (sides)
      if (i == 0 ) { result += height }
      if (i == rows.length - 1) { result += height }

      // If this is first or last column,
      // add height to surface (front and back)
      if (j == 0) { result += height }
      if (j == (rows[i].length - 1)) { result += height }

      if (i < rows.length - 1) {
        result += Math.abs(height - rows[i + 1][j])
      }

      if (j < rows[i].length - 1) {
        result += Math.abs(height - rows[i][j + 1])
      }
    }
  }

  return result
}

module.exports = surface;
