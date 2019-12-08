/*
 * https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 */

function hourglasses(arr) {
  let max = -Infinity
  const arrDimension = Math.sqrt(arr.length)
  const movementDimension = arrDimension - 2
  const indexModifiers = [
    0,
    1,
    2,
    arrDimension + 1,
    arrDimension * 2,
    arrDimension * 2 + 1,
    arrDimension * 2 + 2,
  ]

  for (let i = 0; i < movementDimension; i++) {
    for (let j = 0; j < movementDimension; j++) {
      const sum = indexModifiers.reduce((acc, item) => {
        return acc + arr[item + i + j * arrDimension]
      }, 0)

      max = sum > max ? sum : max
    }
  }

  return max
}

module.exports = hourglasses
