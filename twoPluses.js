// https://www.hackerrank.com/challenges/two-pluses/problem
function twoPluses(grid) {
  const hash = buildHash(grid)
  const pluses = compilePluses(hash)

  return 3
}

function buildHash(grid) {
  let hash = {}

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 'G') {
        if (!hash[i]) hash[i] = {}
        hash[i][j] = true
      }
    }
  }

  return hash
}

function compilePluses(hash) {
  let pluses = []

  Object.keys(hash).forEach(firstKey => {
    // console.log('Aqui, firstKey', firstKey);
    Object.keys(hash[firstKey]).forEach(secondKey => {
      // console.log('Aqui, secondKey', secondKey);
      let hasOneMoreUnitofDimension = true
      let unitOfDimension = 1

      while (hasOneMoreUnitofDimension) {
        if (checkUnitOfDimension(hash, firstKey, secondKey, unitOfDimension + 1)) {
          unitOfDimension++
        } else {
          hasOneMoreUnitofDimension = false
        }
      }

      console.log(firstKey, secondKey, unitOfDimension);
      pluses.push([firstKey, secondKey, unitOfDimension])
      // console.log({pluses})
    })
  })

  return pluses
}

function checkUnitOfDimension(hash, firstKey, secondKey, unit) {
  return checkIfGood(hash, firstKey - unit, secondKey)
    && checkIfGood(hash, firstKey + unit, secondKey)
    && checkIfGood(hash, firstKey, secondKey - unit)
    && checkIfGood(hash, firstKey, secondKey + unit)
}

function checkIfGood(hash, firstKey, secondKey) {

}

module.exports = twoPluses

// Corner cases:
// No good tiles: area 0.
//
// No pluses larger than point
//    Good tiles only on top row, or bottom row, or first column or last column.
//      If 2 good tiles, 1 × 1 is 1.
