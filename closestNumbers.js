/*
 * https://www.hackerrank.com/challenges/closest-numbers/problem
 */
function closestNumbers(arr) {
  arr = arr.map(Number)
  arr.sort((a, b) => {return a - b})

  let smallestDifference = Infinity
  let pairsWithSmallestDifference = []

  for (let i = 0; i < arr.length - 1; i++) {
    const pairDiff = arr[i+1] - arr[i]

    if (pairDiff < smallestDifference) {
      smallestDifference = pairDiff
      pairsWithSmallestDifference = [arr[i], arr[i+1]]
    } else if (pairDiff == smallestDifference) {
      pairsWithSmallestDifference.push(arr[i])
      pairsWithSmallestDifference.push(arr[i+1])
    }

  }

  return pairsWithSmallestDifference.join(" ")
}

module.exports = closestNumbers;
