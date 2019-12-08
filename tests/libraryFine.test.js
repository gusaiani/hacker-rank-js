const libraryFine = require('../libraryFine')

test('Returned before due year', () => {
  expect(libraryFine(1, 1, 2014, 1, 1, 2015)).toEqual(0)
})

test('Returned year after due year', () => {
  expect(libraryFine(1, 1, 2015, 1, 1, 2014)).toEqual(10000)
})

test('Returned same year but month before due month', () => {
  expect(libraryFine(1, 9, 2013, 1, 10, 2013)).toEqual(0)
})

test('Returned same year but 2 months after due month', () => {
  expect(libraryFine(1, 9, 2013, 1, 7, 2013)).toEqual(1000)
})

test('Returned same year same month at a day before due day', () => {
  expect(libraryFine(1, 9, 2013, 3, 9, 2013)).toEqual(0)
})

test('Returned same year same month at due day', () => {
  expect(libraryFine(3, 9, 2013, 3, 9, 2013)).toEqual(0)
})

test('Returned same year same month, two days late', () => {
  expect(libraryFine(11, 6, 2015, 9, 6, 2015)).toEqual(30)
})
