//generate quote html
const printQuote = () => {
  const pickedQuote = getRandomQuote()

  let quote = pickedQuote.quote
  let source = pickedQuote.source
  let citation = pickedQuote.citation
  let year = pickedQuote.year

  let strQuote = ''

  if (citation !== '') {
    strQuote += `<div><i>${citation}</i> ${year}<div>`
  }
  if (year !== '') {
    strQuote += ``
  }

  //string for display on page
  strQuote = `<div class="card"><h1>"${quote}"</h1> <h2>-${source}</h2> <h3 class="citation">${citation}</h3> </div>`

  return strQuote
}

//pick new quote on button click (?)
const clickButton = () => {}

const main = document.querySelector('main')

main.innerHTML = printQuote()

/*
  {
    quote: "",
    source: "",
    citation: "",
    year: 2025
  }
*/
