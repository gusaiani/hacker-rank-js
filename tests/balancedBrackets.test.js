const balancedBrackets = require('../balancedBrackets')

test('Open and close parens', () => {
  const string = '()'
  expect(balancedBrackets(string)).toBe(true)
})

test('Just close parens', () => {
  const string = ')'
  expect(balancedBrackets(string)).toBe(false)
})

test('[(])', () => {
  const string = '[(])'
  expect(balancedBrackets(string)).toBe(false)
})

test('Parens with closing bracket in the middle', () => {
  const string = '([)'
  expect(balancedBrackets(string)).toBe(false)
})

test('First balancedBrackets test', () => {
  const string = '{[()]}'
  expect(balancedBrackets(string)).toBe(true)
})

test('Second balancedBrackets test', () => {
  const string = '{[(])}'
  expect(balancedBrackets(string)).toBe(false)
})

test('Third balancedBrackets test', () => {
  const string = '{{([])}}'
  expect(balancedBrackets(string)).toBe(true)
})
