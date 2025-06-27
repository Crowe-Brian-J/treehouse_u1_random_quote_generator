//pick quote from quotes.js
const quotePick = () => {
  return (indQuote = quotes[Math.floor(Math.random() * quotes.length)])
}

console.log(quotePick())

//generate quote html
const quoteGen = (quotePick) => {
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

//pick new quote on button click (?)
const clickButton = () => {}

const main = document.querySelector('main')

main.innerHTML = quoteGen()
