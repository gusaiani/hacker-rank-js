function arrayLeftRotations(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    arr.push(arr.shift())
  }

  return arr
}

module.exports = arrayLeftRotations
