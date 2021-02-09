
const searchMeals = () =>{
  const searchText = document.getElementById("meal-field").value;
  // console.log(searchText);
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {

  const mealContainer = document.getElementById('meals-container');
  meals.forEach(meal => {
    const mealDiv = document.createElement('div');
    mealDiv.innerText = meal.strMeal;
    mealDiv.className = 'meal-div'


    const mealInfo = `
    <div class="card">
    <img class="img-fluid" src="${meal.strMealThumb}" alt="">
    <div class="card-body">
    <h3 class='meal-tittle'>${meal.strMeal}</h3> 
    <button onclick = "getIngredients (${meal.idMeal})" class="btn btn-warning btn-card mt-2 mb-2 p-2.5">KNOW MORE</button>
    </div>  
  </div>
    `
    mealDiv.innerHTML = mealInfo;
    mealContainer.appendChild(mealDiv);

  })
  
}



const getIngredients = id => {
const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
// console.log(url)
fetch (url)
.then(res => res.json())
.then(data => displayIngredients (data.meals[0]))
}


// displayIngredients
const displayIngredients = ingredients =>{
 
  const ingredientsDiv = document.getElementById('meal-ingredients');
  const ingredientsInfo =`

  <div  class="ingredients col-md-4 ">
  <img class="img-fluid" src="${ingredients.strMealThumb}" alt="">
  <div class="ingredients-details">
  <h3  class='meal-tittle mt-3 mb-3'>${ingredients.strMeal}</h3> 
  <h5 class ="mb-3" >Ingredients</h5>

  <ul class="ingredients-list">
  <li><i class="fas fa-check-square icon"></i>  ${ingredients.strMeasure1} ${ingredients.strIngredient1}</li>
  <li><i class="fas fa-check-square icon"></i>  ${ingredients.strMeasure2} ${ingredients.strIngredient2}</li>
  <li><i class="fas fa-check-square icon"></i>  ${ingredients.strMeasure3} ${ingredients.strIngredient3}</li>
  <li><i class="fas fa-check-square icon"></i>  ${ingredients.strMeasure4} ${ingredients.strIngredient4}</li>
  <li><i class="fas fa-check-square icon"></i>  ${ingredients.strMeasure5} ${ingredients.strIngredient5}</li>
  <li><i class="fas fa-check-square icon"></i>  ${ingredients.strMeasure6} ${ingredients.strIngredient6}</li>
  <li><i class="fas fa-check-square icon"></i>  ${ingredients.strMeasure7} ${ingredients.strIngredient7}</li>
  <li><i class="fas fa-check-square icon"></i>  ${ingredients.strMeasure8} ${ingredients.strIngredient8}</li>
  <li><i class="fas fa-check-square icon"></i>  ${ingredients.strMeasure9} ${ingredients.strIngredient9}</li>
  <li><i class="fas fa-check-square icon"></i>  ${ingredients.strMeasure10} ${ingredients.strIngredient10}</li>
  </ul>
  </div>  
  </div>
  `
  ingredientsDiv.innerHTML = ingredientsInfo;


}









