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
    year: 1983,
    tags: 'sports'
  },
  {
    quote: "'You miss 100% of the shots you don't take.' -Wayne Gretzky",
    source: 'Michael Scott',
    citation: "The Office, Season 5, Episode 23: 'Michael Scott Paper Company'",
    year: 2009,
    tags: 'sitcom'
  },
  {
    quote:
      "I discovered, at a very early age, that if I talk long enough, I can make anything right or wrong. So either I'm God or truth is relative. In either case, booyah!",
    source: 'Jeff Winger',
    citation: "Community, Season 1, Episode 1: 'Pilot'",
    year: 2009,
    tags: 'sitcom'
  },
  {
    quote:
      "You can yell at me all you want! I've seen enough movies to know that popping the back of a raft makes it go faster!",
    source: 'Troy Barnes',
    citation: "Community, Season 2, Episode 21: 'Paradigms of Human Memory'",
    year: 2011,
    tags: 'sitcom'
  },
  {
    quote:
      "If I had to, I could clean out my desk in five seconds, and nobody would ever know that I'd ever been here. And I'd forget too.",
    source: 'Ryan Howard',
    citation: "The Office, Season 2, Episode 13: 'The Secret'"
  }
]

//random background color on load - edited from arrow function - need to read more about 'this' property
const randomBackgroundColor = () => {
  const randNum = () => Math.floor(Math.random() * 256)
  const r = randNum()
  const g = randNum()
  const b = randNum()
  return `rgb(${r},${g}, ${b})`
}

//pick quote from quotes array
const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

//generate quote html - edited from arrow function - need to read more about 'this' property
const printQuote = () => {
  const pickedQuote = getRandomQuote()

  //load script in quote-box
  //had to switch .querySelector for getElementById because quote-box is the div's id not a main element
  const quoteBox = document.getElementById('quote-box')

  //store quotes in easier format for reading in function
  let quote = pickedQuote.quote
  let source = pickedQuote.source
  let citation = pickedQuote.citation

  //establish quote string, broken for line readability
  // -- remember to close 2 divs at end
  let strQuote = `<div class ="container"><div id="quote-box" class="quote-box">`

  //main quote portion
  strQuote += `<p class="quote">${quote}</p>`

  //source - conditionals for citation/year/end p tag after
  strQuote += `<p class ="source">${source}`

  //if citation
  if (pickedQuote.citation) {
    strQuote += `<span class="citation">${citation}</span>`
  }

  //if year
  if (pickedQuote.year) {
    strQuote += `<span class="year">${pickedQuote.year}</span>`
  }

  //if tags - done this way because defining it above automatically made tags have a value, even undefined
  if (pickedQuote.tags) {
    strQuote += `<p class="tags">Tags: ${pickedQuote.tags}</p>`
  }

  //close p and 2 div tags
  strQuote += `</p></div></div>`

  //call random background color on refresh
  document.body.style.backgroundColor = randomBackgroundColor()

  //call page changes
  quoteBox.innerHTML = strQuote
}

//code to refresh page after 12 seconds
setInterval(printQuote, 12000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false)
