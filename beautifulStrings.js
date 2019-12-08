function beautifulStrings(str) {
  const arr = str.split('')
  let beautifulStrings = {}
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j) {
        let arrCopy = arr.slice(0)

        if (i < j) {
          arrCopy.splice(i, 1)
          arrCopy.splice(j - 1, 1)
        } else {
          arrCopy.splice(j, 1)
          arrCopy.splice(i - 1, 1)
        }
        const beautifulString = arrCopy.join('')

        if (!beautifulStrings[beautifulString]) {
          beautifulStrings[beautifulString] = 1
          count++
        } else {
          beautifulStrings[beautifulString] =
            beautifulStrings[beautifulString] + 1
        }
      }
    }
  }

  return count
}

module.exports = beautifulStrings
