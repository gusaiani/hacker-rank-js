// https://www.hackerrank.com/challenges/find-digits/problem
function findDigit(multilinestring) {
  return treatString(multilinestring)
    .map(number => doFindDigit(number))
    .join('\n')
}

function doFindDigit(string) {
  const divisible = parseInt(string)

  return string.split('').reduce((acc, item) => {
    return divisible % parseInt(item) == 0 ? acc + 1 : acc
  }, 0)
}

function treatString(multilinestring) {
  return multilinestring
    .trim()
    .split('\n')
    .map((line, index) => {
      return index == 0 ? null : line.trim()
    })
    .filter(x => x)
}

module.exports = findDigit
