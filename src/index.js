console.log("✅ index.js is connected and running");

function generateIngredientsList(event){
event.preventDefault();
 alert("creating your recipe...");

const addedIngredients = new Set();
let recipeFormElement = document.querySelector("#recipeGeneratorForm");
recipeFormElement.addEventListener("submit", generateIngredientsList);

  let input = document.querySelector(".AddYourIngredients");
  let rawIngredients = input.value.trim();
  if (rawIngredients.length === 0) return;

  let ingredients = rawIngredients.split(",").map(item => item.trim().toLowerCase()).filter(item => item !== "" && !addedIngredients.has(item));
  ingredients.forEach(item => addedIngredients.add(item));

  produceMyList(ingredients);
  input.value = ""; 

}
  
function prodceMyList(ingredients) {

const  list = document.querySelector("#ingredient-list");
ingredients.forEach((ingredient) => {
    
    let li = document.createElement("li");
    let span = document.createElement("span");
    li.appendChild(span); //this is for me, so I remember what it does
    //span appears inside the li
    list.appendChild(li); //the li with the span inside appears within my ul. This is needed to apply successfully the typewriter effect. 

    new Typewriter(span, {
      strings: ingredient,
      autoStart: true,
      delay: 50,
    });
  });

}