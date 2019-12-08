function breakingBestAndWorstRecords(arr) {
  const initialScore = arr.shift()

  const init = {
    max: initialScore,
    min: initialScore,
    maxCount: 0,
    minCount: 0,
  }

  const {maxCount, minCount} = arr.reduce((acc, item) => {
    if (item > acc.max) {
      acc.max = item
      acc.maxCount = acc.maxCount + 1
    }

    if (item < acc.min) {
      acc.min = item
      acc.minCount = acc.minCount + 1
    }

    return acc
  }, init)

  return `${maxCount} ${minCount}`
}

module.exports = breakingBestAndWorstRecords
