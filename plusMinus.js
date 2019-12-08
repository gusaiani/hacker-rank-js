/*
 * https://www.hackerrank.com/challenges/plus-minus/problem
 */

function plusMinus(arr) {
  const length = arr.length
  let count = {
    zero: 0,
    positive: 0,
    negative: 0,
  }

  for (let i = 0; i < length; i++) {
    if (arr[i] > 0) count.positive++
    if (arr[i] < 0) count.negative++
    if (arr[i] === 0) count.zero++
  }

  const zeroFraction = parseFloat(count.zero / length).toFixed(6)
  const positiveFraction = parseFloat(count.positive / length).toFixed(6)
  const negativeFraction = parseFloat(count.negative / length).toFixed(6)

  return `${positiveFraction}\n${negativeFraction}\n${zeroFraction}`
}

module.exports = plusMinus
