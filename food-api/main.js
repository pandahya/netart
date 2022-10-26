const recipeButton = document.querySelector("#recipe-button");
recipeButton.addEventListener("click", generateRecipe);
// generateRecipe();

async function generateRecipe(){
    const recipeData = await retrieveData();
};

async function retrieveData(){
    //food api
    const recipeInfo = "https://api.spoonacular.com/recipes/random?apiKey=7102f32ae95747718c96a58fa5cc028b&includeNutrition=false";
    const recipeResponse = await fetch(recipeInfo);

    const recipeData = await recipeResponse.json(); //recipeData is JSON object
    console.log(recipeData);
    generateHTML(recipeData);

};


function generateHTML(recipeData){
    let fullRecipe = '';
    if(recipeData.recipes[0].image){
        let recipeImg = `<img src="${recipeData.recipes[0].image}">`;
        fullRecipe += recipeImg;
    }
    if(recipeData.recipes[0].title){
        let recipeTitle = `<h2>${recipeData.recipes[0].title}</h2>`;
        fullRecipe += recipeTitle;
    }
    if(recipeData.recipes[0].servings){
        let recipeServings = `<h3>Servings: ${recipeData.recipes[0].servings}</h3>`;
        fullRecipe += recipeServings;
    }
    if(recipeData.recipes[0].instructions){
        let recipeInstructions = `<p>${recipeData.recipes[0].instructions}</p>`;
        fullRecipe += recipeInstructions;
    }
    document.querySelector("main").innerHTML = fullRecipe;
}