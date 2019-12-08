// https://www.hackerrank.com/challenges/cut-the-sticks/problem
function cutTheStick(arr) {
  const reduction = arr.reduce(
    ({arr, count}, item) => {
      arr[item] = arr[item] ? arr[item] + 1 : 1
      return {arr, count: count + 1}
    },
    {arr: new Array(), count: 0},
  )

  const tally = reduction.arr
  let count = reduction.count
  let result = [count]

  tally.forEach(item => {
    if (item && count - item > 0) {
      result.push(count - item)
      count -= item
    }
  })

  return result
}

module.exports = cutTheStick
