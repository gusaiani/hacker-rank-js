const findWord = require('../question2')

test('A question 2 test', () => {
  expect(findWord(['E>R', 'R>U', 'P>E'])).toEqual('PERU')
})

test('Another question 2 test', () => {
  expect(findWord(['I>N', 'A>I', 'P>A', 'S>P'])).toEqual('SPAIN')
})
