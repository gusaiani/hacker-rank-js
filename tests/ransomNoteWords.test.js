const ransomNote = require('../ransomNoteWords')

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

test('A long ransomNote test', () => {
  const magazine =
    'zahk dp apdz clo e dk awfvf osb qr sa cqjq zgr nvxtb abjy axa ili wdyw soqku buwcl qcub sautu ii vkrzl bdob nona al zg ombzc c dbun f xkuo lsax hfki j dfft uce ugj ywz vucgg xq udrkt ypy tmxgc ty gar kty dc bznj pzzx clo apdz nvxtb clo sa clo zahk awfvf soqku udrkt udrkt e ypy xkuo tmxgc ombzc wdyw al axa lsax clo abjy osb apdz bdob pzzx zahk c bznj gar osb xkuo zahk zg uce zg clo e apdz gar xq dbun buwcl ili bznj clo osb dc dbun ywz'
  const note =
    'buwcl qr axa ypy zahk nvxtb dp hfki ii uce dc zg dbun ypy ty cqjq zg kty bznj zg zahk dp c al ugj ywz qcub ywz wdyw hfki gar e axa dp qr kty bznj clo ty vucgg qcub al vkrzl qcub j awfvf soqku lsax bdob nvxtb'
  expect(ransomNote(magazine, note)).toBe(false)
})

test('Another false ransomNote test', () => {
  const magazine = 'ive got a lovely bunch of coconuts'
  const note = 'ive got some coconuts'
  expect(ransomNote(magazine, note)).toBe(false)
})
