/*
 * https://www.hackerrank.com/challenges/mini-max-sum/problem?h_r=next-challenge&h_v=zen
 */
function minMaxSum(arr) {
  const initial = {
    sum: 0,
    min: Infinity,
    max: -Infinity,
  }

  const final = arr.reduce((acc, item) => {
    acc.sum += item
    if (item < acc.min) acc.min = item
    if (item > acc.max) acc.max = item
    return acc
  }, initial)

  const minSum = final.sum - final.max
  const maxSum = final.sum - final.min

  return minSum + ' ' + maxSum
}

module.exports = minMaxSum
