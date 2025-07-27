console.log("✅ JS file loaded");


function generateIngredientsList(event){
event.preventDefault();
 alert("creating your recipe...");
 console.log("Form submitted");
const addedIngredients = new Set();



let recipeFormElement = document.querySelector("#recipeGeneratorForm");
recipeFormElement.addEventListener("submit", generateIngredientsList);

  let input = document.querySelector(".AddYourIngredients");
  
  console.log("Raw input:", input.value);
  let rawIngredients = input.value.trim();
  if (rawIngredients.length === 0) return;

  let ingredients = rawIngredients.split(",").map(item => item.trim().toLowerCase()).filter(item => item !== "" && !addedIngredients.has(item));

  console.log("Ingredients list:", ingredients);
  ingredients.forEach(item => addedIngredients.add(item));

  produceMyList(ingredients);
  input.value = ""; 

  


}
  
function prodceMyList(ingredients) {

let list = document.querySelector("#ingredeint-list");
ingredients.forEach((ingredient) => {
    
    let li = document.createElement("li");
    let span = document.createElement("span");
    li.appendChild(span); //span appears inside the li
    list.appendChild(li); //the li with the span inside appears within my ul. This is needed to apply successfully the typewriter effect. 

    new Typewriter(span, {
      strings: ingredient,
      autoStart: true,
      delay: 50,
    });
  });

}