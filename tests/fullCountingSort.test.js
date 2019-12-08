/*
 *   https://www.hackerrank.com/challenges/countingsort4/problem
 */
const fullCountingSort = require('../fullCountingSort')

test('A fullCountingSort test', () => {
  const arr = [
    ['0', 'ab'],
    ['6', 'cd'],
    ['0', 'ef'],
    ['6', 'gh'],
    ['4', 'ij'],
    ['0', 'ab'],
    ['6', 'cd'],
    ['0', 'ef'],
    ['6', 'gh'],
    ['0', 'ij'],
    ['4', 'that'],
    ['3', 'be'],
    ['0', 'to'],
    ['1', 'be'],
    ['5', 'question'],
    ['1', 'or'],
    ['2', 'not'],
    ['4', 'is'],
    ['2', 'to'],
    ['4', 'the'],
  ]

  const result = '- - - - - to be or not to be - that is the question - - - -'

  expect(fullCountingSort(arr)).toEqual(result)
})
