function pickingNumbers(arr) {
  let maxSequence = 0;

  arr.sort((a, b) => { return a - b })

  for (let i = 0; i < arr.length - 1; i++) {
    const tempArray = [arr[i]]
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] <= 1) {
        tempArray.push(arr[j])
      }
    }

    if (tempArray.length > maxSequence) maxSequence = tempArray.length
  }

  return maxSequence
}

module.exports = pickingNumbers;
