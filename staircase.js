/*
 * https://www.hackerrank.com/challenges/staircase/problem
 */
function staircase(steps) {
  let string = '';

  for (let i = 1; i <= steps; i++) {
    string += ' '.repeat(steps - i) + '#'.repeat(i) + '\n'
  }

  return string;
}

module.exports = staircase;
