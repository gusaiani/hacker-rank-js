/*
 * https://www.hackerrank.com/challenges/mini-max-sum/problem?h_r=next-challenge&h_v=zen
 */
function gradingStudents(arr) {
  const failingGrade = 37

  return arr.map(item => {
    if (item <= failingGrade) return item
    if (item % 5 < 3) return item
    return item + (5 - (item % 5))
  })
}

module.exports = gradingStudents
