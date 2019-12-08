/*
 * https://www.hackerrank.com/challenges/encryption/problem
 */
const encryption = require('../encryption')

test('An encryption test', () => {
  const str = 'have a nice day'
  /*
   *    hae
   *    and
   *    via
   *    ecy
   */
  expect(encryption(str)).toEqual('hae and via ecy')
})

test('Another encryption test', () => {
  const str = 'feedthedog'
  expect(encryption(str)).toEqual('fto ehg ee dd')
})
