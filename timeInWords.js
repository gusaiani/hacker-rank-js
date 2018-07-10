function timeInWords(h, m) {
  const expression = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty'
  }

  if (m == 0) return `${expression[h]} o\' clock`
  if (m == 15) return `quarter past ${expression[h]}`
  if (m == 45) return `quarter to ${expression[h + 1]}`
  if (m == 30) return `half past ${expression[h]}`
  if (m == 1) return `one minute past ${expression[h]}`
  if (m == 59) return `one minute to ${expression[h + 1]}`
  if (m < 30) {
    const minutes = (m > 20) ?
      `${expression[20]} ${expression[m - 20]}`
      : expression[m]
    return minutes + ' minutes past ' + expression[h]
  }
  if (m > 30) {
    const minutes = (m < 40) ?
      `${expression[20]} ${expression[40 - m]}`
      : expression[60 - m]
    return minutes + ' minutes to ' + expression[h + 1]
  }
}

module.exports = timeInWords;
