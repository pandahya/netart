/*** step 1: set up the button click ***/
const generatorButton = document.querySelector(".generator-button");
generatorButton.addEventListener("click", generateMarxistPupper);
async function generateMarxistPupper() {
  const pupperData = await getPupperData(); // step 2
  generatePupperHTML(pupperData);
}

/*** step 2: use REST APIs to generate a duck ***/
async function getPupperData() {
  // fetch a random dog image from the Random.Dog REST API
  const imgResponse = await fetch("https://random.dog/woof.json");
  const imgData = await imgResponse.json();
  const dogURL = imgData.url;
  // fetch a quote from our homegrown API :P
  const quoteResponse = await fetch("./marxist-quotes.json");
  const quoteList = await quoteResponse.json();
  const randomQuote = quoteList[rng(0, quoteList.length)];
  //we're pulling a list of 700+ quotes every time,
  //how can we optimize this code later?
  return { image: dogURL, ...randomQuote }
}

/*** step 3: generate some HTML out of the API data ***/
async function generatePupperHTML(data) {
  const DOG_SIZE = 300;
  const dogStyles = `
    top: ${rng(DOG_SIZE, window.innerHeight - DOG_SIZE)}px;
    left: ${rng(DOG_SIZE, window.innerHeight - DOG_SIZE)}px;
  `;
  const dog = `
  <div class="dog" style="${dogStyles}">
    <div class="dog-quote">
      <p>${data.text}</p>
    </div>
    <div class="dog-img">
      <img src=${data.image} alt="woof" >
    </div>
  </div>
  `;
  //add the generated dog to our main HTML
  document.querySelector('main').innerHTML += dog;
}


/*** helper methods ***/
function rng(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

