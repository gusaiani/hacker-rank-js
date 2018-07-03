/*
 * https://www.hackerrank.com/challenges/magic-square-forming/problem
 */

/*
 * Sum of rows, columns and diagonals must always be 15.
 * Center must be 5.
 * Corners must be even.
 * "Edges" must be odd.
 */

function magicSquare(arr) {
  let flattenedArr = [].concat(...arr)
  let cost = Infinity

  const possibilities = [
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
  ]

  return possibilities.reduce((cost, magicSquare) => {
    const flatSquare = [].concat(...magicSquare)
    let tempCost = 0;

    for (let i = 0; i < flatSquare.length; i++) {
      tempCost += Math.abs(flatSquare[i] - flattenedArr[i]);
      if (tempCost > cost) return cost;
    }

    return tempCost;
  }, cost)
}

module.exports = magicSquare;
