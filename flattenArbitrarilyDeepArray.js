function flattenArbitrarilyDeepArray(arr, cache = []) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc.concat(flattenArbitrarilyDeepArray(item, acc))
    }
    else acc.push(item)

    return acc
  }, cache)
}

module.exports = flattenArbitrarilyDeepArray;
