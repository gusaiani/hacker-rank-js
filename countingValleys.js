function countingValleys(length, arr) {
  let currentDepth = 0
  let numberOfValleys = 0

  for (let i = 0; i < length; i++) {
    const move = arr[i]

    if (move == 'U') currentDepth++

    if (move == 'D') {
      currentDepth--
      if (currentDepth == -1) numberOfValleys++
    }
  }

  return numberOfValleys
}

module.exports = countingValleys
