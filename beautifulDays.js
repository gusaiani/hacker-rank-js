// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
function beautifulDays(initial, final, divisor) {
  let result = 0

  for (let i = initial; i <= final; i++) {
    if (Math.abs(i - inverse(i)) % divisor == 0) result++
  }

  return result
}

function inverse(num) {
  return parseInt(
    (num + '')
      .split('')
      .reverse()
      .join('')
  )
}

module.exports = beautifulDays
