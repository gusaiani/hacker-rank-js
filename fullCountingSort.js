/*
 *   https://www.hackerrank.com/challenges/countingsort4/problem
 */
function fullCountingSort(arr) {
  const sorted = {}

  for (let i = 0; i < arr.length; i ++) {
    const index = arr[i][0];
    const str = (i < (arr.length / 2))? '-' : arr[i][1]

    if (!sorted[index]) sorted[index] = []
    sorted[index].push(str)
  }

  let strings = []
  Object.keys(sorted).forEach((key) => {
    strings.push(sorted[key].join(' '))
  })

  return strings.join(' ')
}

module.exports = fullCountingSort;
