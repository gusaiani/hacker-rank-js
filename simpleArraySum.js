function simpleArraySum(arr) {
  return arr.reduce((acc, item) => {
    return acc + item
  }, 0)
}

module.exports = simpleArraySum
