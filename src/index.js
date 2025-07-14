function generateIngredientsList(event){
event.preventDefault();

let recipeFormElement = document.querySelector("#recipeGeneratorForm");
recipeFormElement = addEventListener("submit", generateIngredientsList);


  let input = document.querySelector(".AddYourIngredients");
  let rawIngredients = input.value.trim();
  if (rawIngredients.length === 0) return;

  let ingredients = rawIngredients.split(",").map(item => item.trim()).filter(item => item !== "");

  let list = document.querySelector("#ingredient-list");

  ingredients.forEach((ingredient) => {
    
    let li = document.createElement("li");
    let span = document.createElement("span");
    li.appendChild(span);
    list.appendChild(li);

    new Typewriter(span, {
      strings: ingredient,
      autoStart: true,
      delay: 50,
    });
  });

  input.value = ""; 
}
