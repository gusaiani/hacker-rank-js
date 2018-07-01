/*
 * https://www.hackerrank.com/challenges/compare-the-triplets/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 */

function compareTheTriplets(a, b) {
  const aArray = toInts(a);
  const bArray = toInts(b);

  let aScore = 0;
  let bScore = 0;

  for (let i = 0; i < aArray.length; i++) {
    if (aArray[i] > bArray[i]) aScore++;
    else if (aArray[i] < bArray[i]) bScore++;
  }

  return aScore + ' ' + bScore;
}

function toInts(str) {
  return str.split(' ').map(item => {return parseInt(item)})
}

module.exports = compareTheTriplets;
