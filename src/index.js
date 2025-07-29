

function displayRecipe(response){
  recipeResult.innerHTML = "";
     const tw = new Typewriter(recipeResult, { 
      strings: response.data.answer,
      autoStart: true,
      delay:30,
    });

}
function generateRecipe(){
let apiKey = "79c10854b8bbfdaa4tfa826305864ob";
let context = "you are a very famous chef. You like to experiment with cooking that doesn't waste produce, so you like to use whatever is available. The produce can be from tin tuna to fresh mushrooms, you always have an idea. That idea always becomes a healthy nutritious recipe for a meal.";
let prompt = `Write a dinner recipe using these ingredients: ${[...addedIngredients].join(", ")}`;
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
axios.get(apiURL).then(displayRecipe);
}


const addedIngredients = new Set();
const recipeFormElement = document.querySelector("#recipeGeneratorForm");
const recipeButton = document.querySelector("#generateRecipe");
const recipeResult = document.querySelector ("#recipeResult");



recipeFormElement.addEventListener("submit", generateIngredientsList);
recipeButton.addEventListener("click", generateRecipe);


function generateIngredientsList(event)  {
event.preventDefault();

const list = document.querySelector("#ingredient-list");

const input = document.querySelector(".AddYourIngredients");
const rawIngredients = input.value.trim();
  if (rawIngredients.length === 0) return;

const ingredients = rawIngredients.split(",").map((item) => item.trim().toLowerCase()).filter((item) => item !== "" && !addedIngredients.has(item));
 
  if (rawIngredients.length === 0) return;
 
  ingredients.forEach((item) => addedIngredients.add(item));

  produceMyList(ingredients);
  input.value = ""; 

}

function produceMyList(ingredients) {
  const list = document.querySelector("#ingredient-list");
  
ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
    li.appendChild(span); 
    list.appendChild(li); 

    const tw = new Typewriter(span, {
      strings: ingredient,
      autoStart: true,
      delay: 50,
    });

});

  recipeButton.innerText = "Ta-da! Ready to cook?";
  recipeButton.classList.add("visible");
  console.log("Button now visible:", recipeButton);


}