const drawingBook = require('../drawingBook');

test('A drawingBook test', () => {
  expect(drawingBook(5, 4)).toEqual(0);
});

test('Another drawingBook test', () => {
  expect(drawingBook(6, 2)).toEqual(1);
});
