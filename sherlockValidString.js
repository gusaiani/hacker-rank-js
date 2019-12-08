// https://www.hackerrank.com/challenges/sherlock-and-valid-string/
function sherlockValidString(str) {
  return booleanSherlockValidString(str) ? 'YES' : 'NO'
}

function booleanSherlockValidString(str) {
  let hashMap = {}
  let uniqueCounts = []
  for (let char of str) {
    hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1
  }

  let countHashMap = {}

  Object.keys(hashMap).forEach(char => {
    const num = hashMap[char]

    if (!countHashMap[num]) {
      countHashMap[num] = [char]
    } else {
      if (!countHashMap[num].includes(char)) {
        countHashMap[num] = [...countHashMap[num], char]
      }
    }
  })

  const countHashMapKeys = Object.keys(countHashMap)
  const numberOfDifferentKeyCounts = countHashMapKeys.length

  if (numberOfDifferentKeyCounts < 2) {
    return true
  }

  if (numberOfDifferentKeyCounts > 2) {
    return false
  }

  let countsWithMultipleChars = 0

  for (let i = 0; i < countHashMapKeys.length; i++) {
    const count = countHashMapKeys[i]
    const countInt = parseInt(count)

    if (countInt === 1 && countHashMap[count].length === 1) {
      return true
    }

    if (countHashMap[count].length > 1) {
      if (countsWithMultipleChars > 0) {
        return false
      }
      countsWithMultipleChars++
    }
  }

  const [a, b] = Object.keys(countHashMap)

  if (Math.abs(a - b) != 1) return false

  const largestCharCount = Math.max(a, b)

  return countHashMap[largestCharCount].length === 1
}

module.exports = sherlockValidString
