const designerPDFViewer = require('../designerPDFViewer')

test('A designerPDFViewer test', () => {
  const charHeights = '1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5'
  const word = 'abc'

  expect(designerPDFViewer(charHeights, word)).toEqual(9)
})

test('Another designerPDFViewer test', () => {
  const charHeights = '1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7'
  const word = 'zaba'

  expect(designerPDFViewer(charHeights, word)).toEqual(28)
})
