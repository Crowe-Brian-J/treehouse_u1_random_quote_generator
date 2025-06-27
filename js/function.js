const quoteGen = () => {
  //stub for import quotes
  let quote = 'This is a quote.'
  let source = 'Brian Crowe'
  let citation = ''
  let year = 2025

  if (citation !== '') {
    citation = `<div>${year} (from: ${citation})<div>`
  } else {
    citation = `<div>${year}</div>`
  }

  //string for display on page
  const strQuote = `<div class="card"><h1>${quote}</h1> <h3>-${source}</h3> ${citation}</div> <button type="button">Get another quote!</button>`

  return strQuote
}

const main = document.querySelector('main')

main.innerHTML = quoteGen()
