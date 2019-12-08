/*
 * A precedence rule is given as "P>E", which means that letter "P" is followed directly by the letter "E". Write a function, given an array of precedence rules, that finds the word represented by the given rules.
 *
 * Note: Each represented word contains a set of unique characters, i.e. the word does not contain duplicate letters.
 *
 * Examples:
 * findWord(["P>E","E>R","R>U"]) // PERU
 * findWord(["I>N","A>I","P>A","S>P"]) // SPAIN
 */

function findWord(arr) {
  const word = []

  const firstItem = arr.shift()
  let firstItemArray = firstItem.split('>')
  word[0] = firstItemArray[0]
  word[1] = firstItemArray[1]

  while (arr.length) {
    const item = arr[0]
    itemArray = item.split('>')
    const isFirstLetterInWord = word.indexOf(itemArray[0]) > -1
    const isSecondLetterInWord = word.indexOf(itemArray[1]) > -1

    if (isFirstLetterInWord) {
      arr.shift()
      word.push(itemArray[1])
    } else if (isSecondLetterInWord) {
      arr.shift()
      word.unshift(itemArray[0])
    }
  }

  return word.join('')
}

module.exports = findWord
