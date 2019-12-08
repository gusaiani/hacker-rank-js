// https://www.hackerrank.com/challenges/save-the-prisoner/problem
function saveThePrisoner(prisoners, candies, startAt) {
  const a = startAt + candies - 1
  if (a > prisoners) {
    if (a % prisoners == 0) return prisoners
    return a % prisoners
  }
  return a
}

module.exports = saveThePrisoner
