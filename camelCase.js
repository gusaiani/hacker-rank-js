function camelCase(str) {
  return str.split('').reduce((acc, char) => {
    return char.toLowerCase() != char ? acc + 1 : acc
  }, 1)
}

module.exports = camelCase
