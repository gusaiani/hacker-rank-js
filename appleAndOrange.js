/*
 * https://www.hackerrank.com/challenges/apple-and-orange/problem?h_r=next-challenge&h_v=zen
 */
function countApplesAndOranges(
  houseStart,
  houseEnd,
  appleTree,
  orangeTree,
  apples,
  oranges,
) {
  const applesOnHouse = fruitsOnHouse(houseStart, houseEnd, appleTree, apples)
  const orangesOnHouse = fruitsOnHouse(
    houseStart,
    houseEnd,
    orangeTree,
    oranges,
  )
  return [applesOnHouse, orangesOnHouse]
}

function fruitsOnHouse(houseStart, houseEnd, tree, fruits) {
  return fruits.reduce((acc, distance) => {
    const landingSpot = tree + distance
    acc += landingSpot >= houseStart && landingSpot <= houseEnd ? 1 : 0
    return acc
  }, 0)
}

module.exports = countApplesAndOranges
