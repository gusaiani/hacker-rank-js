const angryProfessor = require('../angryProfessor')

test('A angryProfessor test', () => {
  const string = `
  2
  4 3
  -1 -3 4 2
  4 2
  0 -1 2 1
  `
  expect(angryProfessor(string)).toEqual('YES\nNO')
})
