//pick quote from quotes.js
const quotePick = () => {
  return (indQuote = quotes[Math.floor(Math.random() * quotes.length)])
}

//generate quote html
const quoteGen = () => {
  const pickedQuote = quotePick()
  console.log(pickedQuote)
  //stub for import quotes
  let quote = pickedQuote.quote
  let source = pickedQuote.source
  let citation = pickedQuote.citation
  let year = pickedQuote.year

  if (citation !== '') {
    citation = `<div><p>${year}</p> <p>(citation: ${citation})</p><div>`
  } else {
    citation = `<div>${year}</div>`
  }

  //string for display on page
  const strQuote = `<div class="card"><h1>"${quote}"</h1> <h2>-${source}</h2> ${citation}</div> </div>`

  return strQuote
}

//pick new quote on button click (?)
const clickButton = () => {}

const main = document.querySelector('main')

main.innerHTML = quoteGen()
