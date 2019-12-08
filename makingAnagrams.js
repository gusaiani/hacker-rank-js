function makingAnagrams(str1, str2) {
  let arr1 = makeSortedArray(str1)
  let arr2 = makeSortedArray(str2)
  let deletions = 0

  while (arr1.length || arr2.length) {
    if (arr1.length == 0) {
      deletions += arr2.length
      break
    }
    if (arr2.length == 0) {
      deletions += arr1.length
      break
    }

    if (arr1[0] == arr2[0]) {
      arr1.shift()
      arr2.shift()
    } else if (arr1[0] < arr2[0]) {
      deletions++
      arr1.shift()
    } else if (arr1[0] > arr2[0]) {
      deletions++
      arr2.shift()
    }
  }

  return deletions
}

function makeSortedArray(str) {
  return str
    .split(' ')
    .join('')
    .split('')
    .sort()
}

module.exports = makingAnagrams
