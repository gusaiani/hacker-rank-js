// https://www.hackerrank.com/challenges/two-pluses/problem
function twoPluses(grid) {
  const hash = buildHash(grid)
  const pluses = compilePluses(hash)
  const largestPlusesNotTouchingEachOther =
    findLargestPlusesNotTouchingOneAnother(pluses)

  if (!largestPlusesNotTouchingEachOther) return 0

  return largestPlusesNotTouchingEachOther
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
    Object.keys(hash[firstKey]).forEach(secondKey => {
      let hasOneMoreUnitofDimension = true
      let unitOfDimension = 1
      firstKey = parseInt(firstKey)
      secondKey = parseInt(secondKey)

      while (hasOneMoreUnitofDimension) {
        pluses =
          addPlusToList([firstKey, secondKey, unitOfDimension], pluses)

        if (checkUnitOfDimension(hash, firstKey, secondKey, unitOfDimension)) {
          unitOfDimension++
        } else {
          hasOneMoreUnitofDimension = false
        }
      }
    })
  })

  return pluses
}

function addPlusToList(plus, pluses) {
  if (!pluses.length) return [plus]

  const plusDimension = plus[2]
  let indexToInject = undefined
  let currentIndex = 0

  while (!indexToInject && pluses[currentIndex]) {
    const plusDimensionToCompare = pluses[currentIndex][2]

    if (plusDimension > plusDimensionToCompare) {
      indexToInject = currentIndex
    }

    currentIndex++
  }


  if (indexToInject) {
    pluses.splice(indexToInject - 1, 0, plus).join()
  } else {
    pluses.push(plus)
  }

  return pluses
}

function checkUnitOfDimension(hash, firstKey, secondKey, unit) {
  return checkIfGood(hash, firstKey - unit, secondKey) &&
    checkIfGood(hash, firstKey + unit, secondKey) &&
    checkIfGood(hash, firstKey, secondKey - unit) &&
    checkIfGood(hash, firstKey, secondKey + unit)
}

function checkIfGood(hash, firstKey, secondKey) {
  return hash[firstKey] && hash[firstKey][secondKey]
}

function findLargestPlusesNotTouchingOneAnother(pluses) {
  let largestArea = 0

  for (let i = 0; i < pluses.length; i++) {
    const firstPlus = pluses[i]
    const firstPlusArea = convertDimensionToArea(firstPlus[2])
    if (largestArea > (firstPlusArea * firstPlusArea)) {
      continue
    }
    for (let j = i + 1; j < pluses.length; j++) {
      const doPlusesTouch = checkIfPlusesTouch(pluses[i], pluses[j])
      if (!doPlusesTouch) {
          const area = calculateArea(pluses[i], pluses[j])
        if (area > largestArea) {
          largestArea = area
        }
      }
    }
  }

  return largestArea
}

function arraysMatch (arr1, arr2) {
	// Check if the arrays are the same length
	if (arr1.length !== arr2.length) return false;

	// Check if all items exist and are in the same order
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	// Otherwise, return true
	return true;
};

function checkIfPlusesTouch(firstPlus, secondPlus) {
  if (arraysMatch(firstPlus, [ 5, 5, 5 ]) && arraysMatch(secondPlus, [1, 8, 2])) {
    // debugger
  }
  const verticalCenterDistance = Math.abs(firstPlus[0] - secondPlus[0])
  const horizontalCenterDistance = Math.abs(firstPlus[1] - secondPlus[1])
  const firstPlusSide = firstPlus[2] - 1
  const secondPlusSide = secondPlus[2] - 1
  const minSide = Math.min(firstPlusSide, secondPlusSide)

  if (verticalCenterDistance === 0) {
    if (horizontalCenterDistance < (firstPlusSide + secondPlusSide)) {
      return true
    }
  }

  if (horizontalCenterDistance === 0) {
    if (verticalCenterDistance < (firstPlusSide + secondPlusSide)) {
      return true
    }
  }

  if (verticalCenterDistance > (firstPlusSide + secondPlusSide)) {
    return false
  }

  if (horizontalCenterDistance > (firstPlusSide + secondPlusSide)) {
    return false
  }

  if (verticalCenterDistance > minSide) return false
  if (horizontalCenterDistance > minSide) return false

  return true
}

function calculateArea(firstPlus, secondPlus) {
  const firstDimension = firstPlus[2]
  const secondDimension = secondPlus[2]

  const firstArea = convertDimensionToArea(firstDimension)
  const secondArea = convertDimensionToArea(secondDimension)

  return firstArea * secondArea
}

function convertDimensionToArea(dimension) {
  if (dimension === 1) return 1
  return ((dimension - 1) * 4) + 1
}

module.exports = twoPluses
