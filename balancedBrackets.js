// https://www.hackerrank.com/challenges/balanced-brackets/problem
function balancedBrackets(string) {
  const openerChars = ['(', '[', '{']
  const closerChars = [')', ']', '}']

  const array = string.split('')
  let stack = []

  for (let i = 0; i < array.length; i++) {
    const char = array[i]

    if (openerChars.includes(char)) {
      stack.push(char)
    } else {
      const counterChar = stack.pop()
      if (!counterChar) return false
      if (openerChars.indexOf(counterChar) !== closerChars.indexOf(char))
        return false
    }
  }

  return stack.length === 0
}

module.exports = balancedBrackets
