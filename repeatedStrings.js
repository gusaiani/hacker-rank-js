// https://www.hackerrank.com/challenges/repeated-string/problem
function repeatedStrings(string, chars) {
  const LETTER_TO_FIND = 'a'

  const stringLength = string.length

  const div = Math.floor(chars / stringLength)
  const rem = chars % stringLength

  const [lettersToFindInRem, lettersToFindInStringLength] = string
    .split('')
    .reduce(
      ([inRem, inStrLen], char, index) => {
        if (char === LETTER_TO_FIND) {
          inStrLen++
          if (index < rem) {
            inRem++
          }
        }
        return [inRem, inStrLen]
      },
      [0, 0]
    )

  return div * lettersToFindInStringLength + lettersToFindInRem
}

module.exports = repeatedStrings
