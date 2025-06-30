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

  /* --This is the format it needs to be in
<div class="container">
  <div id="quote-box" class="quote-box">
    <p class="quote">Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.</p>
    <p class="source">Patrick McKenzie<span class="citation">Twitter</span><span class="year">2016</span></p>
  </div>
</div>
*/

  //string for display on page
  strQuote = `<div class="card"><h1>"${quote}"</h1> <h2>-${source}</h2> <h3 class="citation">${citation}</h3> </div>`

  return strQuote
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false)
