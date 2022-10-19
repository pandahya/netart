/* step 1: import the .txt file */
/* 
  our source is a JS file but we're not interested in the code, 
  we're interested in the quote strings inside of it. so we tack
  on a .txt to the end of the file and import it as a string
*/
// import fs from "fs";
const fs = require('fs');
const quotesFile = fs.readFileSync('./quote-abs.js.txt', {encoding: 'utf-8'});
// console.log(quoteFile); //make sure text is here

/* step 2: trim the .txt file
/* 
--let's trim the text so we only have the quotes. it's a string,
  so we can use some string methods to do so.

--in the original JS file, the quotes are stored in a switch statement. 
  we can use the keywords "switch" and "default" (which only occur once 
  in the .txt file) as the beginning and end of our crop.
  let's record the locations (indexes) of these two words 
  inside the text in some variables.
  Then we'll use the string slice() crop the text between
  those indexes, and store it in a new variable
*/
const trimStart = quotesFile.indexOf("switch");
const trimEnd = quotesFile.indexOf("default");
const trimmedQuotesFile = quotesFile.slice(trimStart, trimEnd);
// console.log(quoteList) // as always, check how things are looking

/* step 3: parse a list of quotes from the text */
/*
--input: text file w/ quotes -> output: array of quote strings
--this is pretty easy to do lol
--string.split() divides a string into multiple chunks. whatever
  piece of text you pass in acts as a divider (most common are spaces, commas)
  and stores the chunks in an array.
--we'll use the word "break;" as a divider, which appears after each quote
*/
const quoteList = trimmedQuotesFile.split("break;");
// console.log(quoteList) // yay, now we have an array of strings!

/* step 4: trim and parse quotes into data points */
/* 
--now we'll use the array method map() to run a function on 
  each item in our array at once.
--we'll do this to trim out all the javascript looking fluff
  out of each quote text, so we only have some plaintext with
  some HTML markup.
--the elements of our array are strings, so we'll use string
  methods much like the ones above inside the map function to
  do the trimming. it can get confusing i know @_@
*/
const trimmedQuoteList = quoteList.map(quote => {
  const trimStart = quote.indexOf("('") + 2;
  const trimEnd = quote.indexOf("')");
  const trimmedQuote = quote.slice(trimStart, trimEnd);
  // curious what's going on down below? look up array destructuring
  const [text, source] = trimmedQuote.split('<br /><br />');
  return {text, source};
});
// console.log(trimmedQuoteList);

/* step 5: export the quote list as a JSON file */
fs.writeFileSync('./marxist-quotes.json', JSON.stringify(trimmedQuoteList));