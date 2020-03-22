// https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem
function iceCreamParlor(cost, money) {
  const hashTable = {}

  for (let i = 0; i < cost.length; i++) {
    if (cost[i] < money) {
      if (hashTable[money - cost[i]] !== undefined) {
        return [hashTable[money - cost[i]] + 1, i + 1]
      }
      hashTable[cost[i]] = i
    }
  }
}

/*
 * Slow implementation
 *
function iceCreamParlor(cost, money) {
  const hashTable = {}

  for (let i = 0; i < cost.length; i++) {
    if (cost[i] < money) {
      hashTable[i] = cost[i]
    }
  }

  const keys = Object.keys(hashTable)

  for(let i = 0; i < keys.length - 1; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      if (hashTable[keys[i]] + hashTable[keys[j]] === money) {
        return [parseInt(keys[i])+1, parseInt(keys[j])+1]
      }
    }
  }
}
*/

module.exports = iceCreamParlor
