https://www.hackerrank.com/challenges/sherlock-and-squares/problem
function sherlockAndSquares(init, final) {
  let numberOfSquares = 0
  let smallestSquare = 0

  const squareRootOfInit = Math.sqrt(init)

  if (squareRootOfInit % 1 === 0) {
    numberOfSquares++
    smallestSquare = squareRootOfInit + 1
  } else {
    smallestSquare = Math.ceil(squareRootOfInit)
  }

  while ((smallestSquare * smallestSquare) <= final) {
    numberOfSquares++
    smallestSquare++
  }

  return numberOfSquares
}

module.exports = sherlockAndSquares;
