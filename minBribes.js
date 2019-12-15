// https://www.hackerrank.com/challenges/new-year-chaos/problem
function minBribes(arr) {
  const MAX_BRIBES = 2
  let hashTable = {}
  let bribes = 0
  let i = 0

  while (i <= arr.length - 1) {
    if (arr[i] === i + 1) {
      i++
      continue
    }

    for (let j = i; j < arr.length - 1; j++) {
      const thisNum = arr[j]
      const nextNum = arr[j + 1]
      if (nextNum < thisNum) {
        arr[j] = nextNum
        arr[j + 1] = thisNum

        bribes++
        hashTable[thisNum] = hashTable[thisNum] ? hashTable[thisNum] + 1 : 1
        if (hashTable[thisNum] > MAX_BRIBES) return 'Too chaotic'
        break
      }
    }
  }

  return bribes
}

module.exports = minBribes
