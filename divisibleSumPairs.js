function divisibleSumPairs(arrLength, sum, arr) {
  let sumPairs = 0

  for (let i = 0; i < arrLength; i++) {
    for (let j = i + 1; j < arrLength; j++) {
      if ((arr[i] + arr[j]) % sum == 0) {
        sumPairs++
      }
    }
  }

  return sumPairs
}

module.exports = divisibleSumPairs
