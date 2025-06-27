const quoteGen = () => {
  //stub for import quotes
  let quote = 'This is a quote.'
  let source = 'Brian Crowe'
  //let citation
  //let year = 2025

  //string for display on page
  const strQuote = `${quote} -${source}}`

  return strQuote
}

const main = document.querySelector('main')

main.innerHTML = quoteGen()
