/*
 * https://www.hackerrank.com/challenges/encryption/problem
 */
function encryption(str) {
  const arr = str.replace(/ /g, '').split('')
  const rowSize = Math.round(Math.sqrt(arr.length))
  const colSize = Math.ceil(arr.length / rowSize)

  let encryptedArr = []

  for (let i = 0; i < arr.length; i++) {
    const col = Math.floor(i / colSize)
    const row = i % colSize
    if (!encryptedArr[row]) encryptedArr[row] = []
    encryptedArr[row][col] = arr[i]
  }

  let arrOfRows = []
  for (let j = 0; j < encryptedArr.length; j++) {
    arrOfRows.push(encryptedArr[j].join(''))
  }

  return arrOfRows.join(' ')
}

module.exports = encryption;
