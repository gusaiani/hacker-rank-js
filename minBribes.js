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
      if (arr[j + 1] < arr[j]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp

        bribes++
        hashTable[arr[j + 1]] = hashTable[arr[j + 1]]
          ? hashTable[arr[j + 1]] + 1
          : 1
        if (hashTable[arr[j + 1]] > MAX_BRIBES) return 'Too chaotic'
        break
      }
    }
  }

  return bribes
}

module.exports = minBribes
