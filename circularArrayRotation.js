function circularArrayRotation(arr, rotations, keysToReturn) {
  const arrLength = arr.length
  return keysToReturn.map(entry => {
    const newIndex =
      (arrLength - (rotations % arrLength) + entry) % arrLength
    return arr[newIndex]
  })
}

module.exports = circularArrayRotation
