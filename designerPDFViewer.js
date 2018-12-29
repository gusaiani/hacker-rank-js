// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

function designerPDFViewer(charHeights, word) {
  const charHeightArray = charHeights.split(' ')

  const tallestChar = word.split('').reduce((acc, char) => {
    const charPosition = char.charCodeAt(0) - 97
    const charHeight = charHeightArray[charPosition]

    return (charHeight > acc) ? charHeight : acc
  }, 0)

  return tallestChar * word.length
}

module.exports = designerPDFViewer
