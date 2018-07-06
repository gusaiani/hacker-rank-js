function migratoryBirds(arr) {
  let hashSet = {}
  let maxBirds = -Infinity
  let bird = Infinity

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    hashSet[item] = !hashSet[item] ? 1 : hashSet[item] + 1
  }

  Object.keys(hashSet).forEach((key) => {
    if (hashSet[key] > maxBirds) {
      maxBirds = hashSet[key]
      bird = parseInt(key)
    }

    if ((hashSet[key] == maxBirds) && (parseInt(key) < bird)) {
      bird = parseInt(key)
    }
  })

  return bird;
}

module.exports = migratoryBirds;
