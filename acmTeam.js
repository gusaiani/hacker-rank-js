// https://www.hackerrank.com/challenges/acm-icpc-team/problem
function acmTeam(arr) {
  let maxCommon = 0
  let pairsWithMaxCommon = 0

  for (let i = 0; i < arr.length - 1; i++) {
    const array1 = arr[i].split('')
    for (let j = i + 1; j < arr.length; j++) {
      const array2 = arr[j].split('')
      const numberOfCommon = getCommon(array1, array2)

      if (numberOfCommon > maxCommon) {
        maxCommon = numberOfCommon
        pairsWithMaxCommon = 1
      } else if (numberOfCommon == maxCommon) {
        pairsWithMaxCommon++
      }
    }
  }

  return [maxCommon, pairsWithMaxCommon]
}

function getCommon(array1, array2) {
  let count = 0
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] == 1 || array2[i] == 1) count++
  }

  return count
}

module.exports = acmTeam
