// https://www.hackerrank.com/challenges/ctci-ransom-note/problem

function ransomNoteWords(magazine, note) {
  const magazineArray = convertToWordArray(magazine)
  const noteArray = convertToWordArray(note)

  const magazineHashMap = buildHashMapOfCharCounts(magazineArray)
  const noteHashMap = buildHashMapOfCharCounts(noteArray)

  const noteHashMapKeys = Object.keys(noteHashMap)

  for (let i = 0; i < noteHashMapKeys.length; i++) {
    const char = noteHashMapKeys[i]
    if (!magazineHashMap[char]) return false
    if (magazineHashMap[char] < noteHashMap[char]) return false
  }

  return true
}

function convertToWordArray(string) {
  return string.split(' ')
}

function buildHashMapOfCharCounts(array) {
  const hashMap = {}

  for (const char of array) {
    hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1
  }

  return hashMap
}

module.exports = ransomNoteWords
