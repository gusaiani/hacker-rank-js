/*
 * https://www.hackerrank.com/challenges/sock-merchant/problem
 */
function matchingSocks(arr) {
  let pairs = 0;
  let hashTable = {}

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (!hashTable[item]) hashTable[item] = 0

    hashTable[item]++

    if (hashTable[item] % 2 == 0) pairs++
  }

  return pairs
}

module.exports = matchingSocks;
