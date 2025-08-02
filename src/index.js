function displayRecipe(response) {
  let recipeText = response.data.answer;
  recipeResult.innerHTML = `<span class="creating-recipe">Creating recipe...</span>`;

  new Typewriter(recipeResult, {
    strings: recipeText,
    autoStart: true,
    delay: 30,
  });


  let dishNameLine = recipeText.split("\n")[0];
  let dishName = dishNameLine.includes(":")
    ? dishNameLine.split(":")[0].trim()
    : dishNameLine.trim();
  document.getElementById("dishName").textContent = dishName;


  let apiKey = "79c10854b8bbfdaa4tfa826305864ob5";
  let imagePrompt = `photo of ${dishName}, plated professionally`;
  let imageApiUrl = `https://api.shecodes.io/images/v1/generate?prompt=${encodeURIComponent(imagePrompt)}&key=${apiKey}`;


  axios.get(imageApiUrl)
    .then(function (imageResponse) {
      const dishImage = document.getElementById("dishImage");
      const imageUrl = imageResponse.data.url || imageResponse.data.image_url;
      if (imageUrl) {
        dishImage.src = imageUrl;
        dishImage.style.display = "block";
      } else {
        console.error("No image URL returned", imageResponse.data);
      }
    })
    .catch(function (error) {
      console.error("Image fetch error:", error);
    });
}

function generateRecipe() {
  recipeResult.innerHTML = "<em>Creating recipe...</em>";
let apiKey = "79c10854b8bbfdaa4tfa826305864ob5";
let context = "You are a very famous chef. You like to experiment with cooking that doesn't waste produce, so you like to use whatever is available. The produce can be from tin tuna to fresh mushrooms, you always have an idea. That idea always becomes a healthy nutritious recipe for a meal.";
  let prompt = `Write a dinner recipe using these ingredients: ${[...addedIngredients].join(", ")}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  axios.get(apiURL).then(displayRecipe).catch(error => {
  
    recipeResult.innerHTML = `<strong style="color:red;">Error creating recipe. Please try again.</strong>`;
    console.error(error);

  });

}

const addedIngredients = new Set();
const recipeFormElement = document.querySelector("#recipeGeneratorForm");
const recipeButton = document.querySelector("#generateRecipe");
const recipeResult = document.querySelector ("#recipeResult");
const addIngredientButton = document.querySelector("#addIngredients");

recipeFormElement.addEventListener("submit", generateIngredientsList);
recipeButton.addEventListener("click", generateRecipe);
addIngredientButton.addEventListener("click", generateIngredientsList);

function generateIngredientsList(event)  {
event.preventDefault();


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

}