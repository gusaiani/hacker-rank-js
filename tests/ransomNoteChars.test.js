const ransomNote = require('../ransomNoteChars')

test('One char for both, true', () => {
  const magazine = 'a'
  const note = 'a'
  expect(ransomNote(magazine, note)).toBe(true)
})

test('One char for both, false', () => {
  const magazine = 'a'
  const note = 'b'
  expect(ransomNote(magazine, note)).toBe(false)
})

test('A true ransomNote test', () => {
  const magazine = 'give me one grand today night'
  const note = 'give one grand today'
  expect(ransomNote(magazine, note)).toBe(true)
})

test('A false ransomNote test', () => {
  const magazine = 'two times three is not four'
  const note = 'two times two is four'
  expect(ransomNote(magazine, note)).toBe(false)
})

test('Another false ransomNote test', () => {
  const magazine = 'ive got a lovely bunch of coconuts'
  const note = 'ive got some coconuts'
  expect(ransomNote(magazine, note)).toBe(false)
})
