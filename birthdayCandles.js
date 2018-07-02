/*
 * https://www.hackerrank.com/challenges/mini-max-sum/problem?h_r=next-challenge&h_v=zen
 */
function birthdayCandles(arr) {
  const initial = {
    largest: 0,
    count: 0
  }

  const final = arr.reduce((acc, item) => {

    if (item > acc.largest) {
      acc.largest = item;
      acc.count = 1;
    } else if (item == acc.largest) {
      acc.count++;
    }

    return acc
  }, initial);

  return final.count
}

module.exports = birthdayCandles;
