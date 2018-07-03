/*
 * https://www.hackerrank.com/challenges/the-birthday-bar/problem?h_r=next-challenge&h_v=zen
 */
function birthdayBar(squares, day, month) {
  var possibilityCount = 0

  for (let i = 0; i <= (squares.length - month); i++) {
    const newSquares = squares.slice(0);
    const segment = newSquares.splice(i, month)

    const segmentSum = segment.reduce((acc, item) => { return acc + item }, 0)

    if (segmentSum === day) { possibilityCount++; }

  }

  return possibilityCount;
}

module.exports = birthdayBar;
