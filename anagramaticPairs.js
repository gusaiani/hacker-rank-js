function anagramaticPairs(arr) {
  return arr.map(str => {
    return countAnagramaticPairs(str)
  })
}

function countAnagramaticPairs(str) {
  const arr = str.split('')
  let pairs = 0;

  // Iterate from sizes of 1 to arr.length - 1
  for (let s = 1; s < arr.length; s++) {

    for(let i = 0; i <= arr.length - s; i++) {

      const substr1 = arr.slice(i, i + s).sort().join('')

      for(let j = i + 1; j <= arr.length - s; j++) {

        const substr2 = arr.slice(j, j + s).sort().join('')

        if (substr1 == substr2) pairs++
      }

    }

  }

  return pairs
}

module.exports = anagramaticPairs;
