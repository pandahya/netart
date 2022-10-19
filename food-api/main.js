const recipeButton = document.querySelector("#recipe-button");
recipeButton.addEventListener("click", generateRecipe);
// generateRecipe();

async function generateRecipe(){
    const recipeData = await retrieveData();
    // generateHTML(recipeData);
};

async function retrieveData(){
    //food api
    const recipeInfo = "https://api.spoonacular.com/recipes/random?apiKey=7102f32ae95747718c96a58fa5cc028b&includeNutrition=false";
    const recipeResponse = await fetch(recipeInfo);

    const recipeData = await recipeResponse.json();

    const recipeFull = recipeData.url;
    console.log(recipeFull);
};

function generateHTML(recipeData){
    
}