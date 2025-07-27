



const addedIngredients = new Set();
const recipeFormElement = document.querySelector("#recipeGeneratorForm");
recipeFormElement.addEventListener("submit", generateIngredientsList);
 
function generateIngredientsList(event)  {
event.preventDefault();

const input = document.querySelector(".AddYourIngredients");
const rawIngredients = input.value.trim();
  if (rawIngredients.length === 0) return;

  const ingredients = rawIngredients.split(",").map(item => item.trim().toLowerCase()).filter(item => item !== "" && !addedIngredients.has(item));
  if (rawIngredients.length === 0) return;
 
  ingredients.forEach(item => addedIngredients.add(item));

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

    if (index === ingredients.length -1) {
 tw.callFunction(() => {
        alert("Creating recipe...");
         enableRecipeButton();
 });
 }
  });

}
function enableRecipeButton() {
  const recipeButton = document.querySelector("#generateRecipe");
  recipeButton.style.display = "inline-block";

  recipeButton.addEventListener("click", () => {
    const recipeBox = document.querySelector("#recipeResult");
    recipeBox.innerHTML = `
      <h3>Tonight's Recipe:</h3>
      <p>A delicious creation made from your kitchen findings! 🍽️</p>
    `;
  });
}
