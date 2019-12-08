const timeInWords = require('../timeInWords')

test('A timeInWords test', () => {
  expect(timeInWords(5, 47)).toEqual('thirteen minutes to six')
})

test('A timeInWords test', () => {
  expect(timeInWords(3, 0)).toEqual("three o' clock")
})

test('A timeInWords test', () => {
  expect(timeInWords(7, 15)).toEqual('quarter past seven')
})

test('A timeInWords test', () => {
  expect(timeInWords(7, 55)).toEqual('five minutes to eight')
})

test('A timeInWords test', () => {
  expect(timeInWords(2, 5)).toEqual('five minutes past two')
})
