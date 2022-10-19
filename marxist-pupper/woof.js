const generatorButton = document.querySelector(".generator-button");
generatorButton.addEventListener("click", generateMarxistPupper);
generateMarxistPupper();

async function generateMarxistPupper(){
    const pupperData = await retrieveData(); //get data
    generatePupperHTML(pupperData); //feed data
};

/* STEP: pull data from these APIs */ 
async function retrieveData(){
    //random dog API
    const DOG_IMG_URL = "https://random.dog/woof.json";
    const dogResponse = await fetch(DOG_IMG_URL); //fetch function run to get response
    const dogData = await dogResponse.json(); //dogData waiting for dogResponse, dogResponse is waiting for some data package, use async and await because the data takes longer than the js file to run, and to make sure things dependent on the data don't error before getting the data
    const dogImage = dogData.url;
    console.log(dogData);

    //local marxist quotes API
    const QUOTE_URL = "./marxist-quotes.json";
    const quoteResponse = await fetch(QUOTE_URL); //fetch function run to get response
    const quoteData = await quoteResponse.json();
    const dogQuote = getRandomQuote(quoteData);
    console.log(dogQuote);

    //merge data together
    const data = {
        image: dogImage,
        quoteText: dogQuote.text,
        quoteSource: dogQuote.source
    };
    return data;
};

/* STEP: put a dog element in our HTML with the data that we're pulling */
function generatePupperHTML(pupperData){
    const dogHTML = `
    <div class="dog">
        <div class="dog-quote">
        <p>${pupperData.quoteText}</p>
        </div>
        <div class="dog-img">
        <img
            src=${pupperData.image}
            alt="woof!"
        />
        </div>
    </div>  
    `;

    document.querySelector("main").innerHTML += dogHTML;
};

/* Helper Functions */
function getRandomQuote(quotes){
    return quotes[rng(0,quotes.length)];
}
function rng(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }