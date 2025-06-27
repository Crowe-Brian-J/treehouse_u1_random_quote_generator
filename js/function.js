const quoteGen = () => {
  //stub for import quotes
  let quote = 'This is a quote.'
  let source = 'Brian Crowe'
  //let citation
  //let year = 2025

  //string for display on page
  const strQuote = `<h1>${quote}</h1> <h3>-${source}</h3>`

  return strQuote
}

const main = document.querySelector('main')

main.innerHTML = quoteGen()
