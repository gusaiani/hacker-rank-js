// https://www.hackerrank.com/challenges/angry-professor/problem

/*
Case 1: Initial word is longer than final word

Add n steps to remove the extra final chars.
Then its equal length

Case 2: Initial word is shorter than final word
Treat as 2 of equal length (shorter of the 2)
Add n final ones.

Case 3: same length.
If first of each are equal, add no steps.
Remove those two first items.
*/

function appendAndDelete(str1, str2, moves) {
  const arr1 = str1.split('')
  const arr2 = str2.split('')

  const length1 = arr1.length
  const length2 = arr2.length

  const movesDueToLengthDifference = Math.abs(length1 - length2)
  const smallestLength = Math.min(length1, length2)

  let movesNecessary = 0

  for (let i = 0; i < smallestLength; i++) {
    if (arr1[i] != arr2[i]) {
      movesNecessary = (smallestLength - i) * 2
      break
    }
  }

  return movesDueToLengthDifference + movesNecessary <= moves
}

module.exports = appendAndDelete
