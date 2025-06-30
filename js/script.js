/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//quotes array
const quotes = [
  {
    quote: "You miss 100% of the shots you don't take.",
    source: 'Wayne Gretzky',
    citation: "Hockey News, 'Bob McKenzie's Interview with Wayne Gretzky'",
    year: 1983
  },
  {
    quote: "'You miss 100% of the shots you don't take.' -Wayne Gretzky",
    source: 'Michael Scott',
    citation: "The Office, Season 5, Episode 23: 'Michael Scott Paper Company'",
    year: 2009
  },
  {
    quote:
      "I discovered, at a very early age, that if I talk long enough, I can make anything right or wrong. So either I'm God or truth is relative. In either case, booyah!",
    source: 'Jeff Winger',
    citation: "Community, Season 1, Episode 1: 'Pilot'",
    year: 2009
  },
  {
    quote:
      "Interesting. It's just that the average person has a much harder time saying, 'booyah,' to moral relativism.",
    source: 'Prof. Ian Duncan',
    citation: "Community, Season 1, Episode 1: 'Pilot'",
    year: 2009
  },
  {
    quote: '',
    source: '',
    citation: '',
    year: 2025
  }
]

//pick quote from quotes array
const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

//generate quote html
const printQuote = () => {
  const pickedQuote = getRandomQuote()

  //store quotes in easier format for reading in function
  let quote = pickedQuote.quote
  let source = pickedQuote.source
  let citation = pickedQuote.citation
  let year = pickedQuote.year

  //establish quote string, broken for line readability
  // -- remember to close 2 divs at end
  let strQuote = `<div class ="container"><div id="quote-box" class="quote-box">`

  //main quote portion
  strQuote += `<p class="quote">${quote}</p>`

  //source -- conditionals for source/year/end p tag after
  strQuote += `<p class ="source">${source}`

  //if citation
  if (citation !== '') {
    strQuote += `<span class="citation">${citation}</span>`
  }

  //if year
  if (year !== 0) {
    strQuote += `<span class="year">${year}</span>`
  }

  //close p and 2 div tags
  strQuote += `</p></div></div>`

  return strQuote
}

//load script in <main>
const main = document.querySelector('main')
main.innerHTML = printQuote()

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false)
