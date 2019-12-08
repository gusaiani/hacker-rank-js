/*
 * Solve https://www.hackerrank.com/challenges/utopian-tree/problem
 */
function utopianTree(cycles) {
  let height = 1

  for (let i = 1; i <= cycles; i++) {
    height = i % 2 === 0 ? height + 1 : height * 2
  }

  return height
}

module.exports = utopianTree
