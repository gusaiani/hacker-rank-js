function drawingBook(pages, pageToTurn) {
  if (pages % 2 == 0) pages++
  let countPagesFromStart = true
  let pagesFromStart = 0
  let pagesToEnd

  for (let i = 0; i <= pages; i = i + 2) {
    if (countPagesFromStart) {
      pagesFromStart++

      if (i == pageToTurn || pageToTurn == i + 1) {
        pagesFromStart--
        countPagesFromStart = false
        pagesToEnd = 0
      }
    } else {
      pagesToEnd++
    }
  }

  return (pagesToEnd < pagesFromStart) ? pagesToEnd : pagesFromStart
}

module.exports = drawingBook;
