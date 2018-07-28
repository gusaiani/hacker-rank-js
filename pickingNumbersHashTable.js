function pickingNumbersHashTable(arr) {
  let maxSequenceLength = 0
  var hashTable = {}

  for (let i = 0; i < arr.length; i++) {
    if (hashTable[arr[i]]) {
      hashTable[arr[i]] = hashTable[arr[i]] + 1;
    } else {
      hashTable[arr[i]] = 1
    }
  }

  for (var key in hashTable) {
    const adjacentKeyPlus = parseInt(key) + 1
    const adjacentKeyMinus = parseInt(key) - 1
    const adjacents = [adjacentKeyPlus, adjacentKeyMinus]

    adjacents.forEach(adjacentKey => {
      const currentCount = hashTable[key]
      const adjacentCount = hashTable[adjacentKey]
      if (adjacentCount && (currentCount + adjacentCount > maxSequenceLength)) {
        maxSequenceLength = currentCount + adjacentCount
      }
    })
  }

  return maxSequenceLength
}

module.exports = pickingNumbersHashTable;
