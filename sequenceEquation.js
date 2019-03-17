// https://www.hackerrank.com/challenges/permutation-equation/problem

/*

p = [5, 2, 1, 3, 4]

x = 1, p[1] = 3. 3 is in position 4.
x = 2, p[2] = 2. 2 is in position 2.
x = 3, p[3] = 4. 4 is in position 5.
x = 4, p[4] = 5. 5 is in position 1.
x = 5, p[5] = 1. 1 is in position 3.

result = [4, 2, 5, 1, 3].

p = [2, 3, 1]

x = 1, p[1] = 3. 3 is in position 2.
x = 2, p[2] = 1. 1 is in position 3.
x = 3, p[3] = 2. 2 is in position 1.

result = [2, 3, 1]

*/
function sequenceEquation(arr) {
  let result = []

  const hashTable = arr.reduce((acc, entry, index) => {
    acc[entry] = index + 1
    return acc
  },{})


  for (let i = 1; i <= arr.length; i++) {
    const iPosition = hashTable[i]
    result.push(hashTable[iPosition])
  }

  return result
}

module.exports = sequenceEquation
