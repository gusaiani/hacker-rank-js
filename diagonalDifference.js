/*
 * https://www.hackerrank.com/challenges/diagonal-difference/problem
 */

function diagonalDifference(arr) {
  const flat = [].concat(...arr)
  const dimensions = Math.sqrt(flat.length)

  let sum = 0;

  for (let i = 0; i < dimensions; i++) {
    const firstDiagonalIndex = dimensions * i + i
    const secondDiagonalIndex = (dimensions * i) + (dimensions - i - 1)

    sum += (flat[firstDiagonalIndex] - flat[secondDiagonalIndex])
  }

  return Math.abs(sum);
}

module.exports = diagonalDifference;
